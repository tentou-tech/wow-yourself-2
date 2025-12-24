'use client'
// UI Components
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

// Services and Stores
import { getUserProfile, login, resendVerifyEmail, updateUserProfile } from '@/services/user'
import { useUserStore } from '@/stores/user-store'

// Third-party libraries
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { create } from 'zustand'

// Local components
import { setAccessToken, setRefreshToken } from '@/lib/token'
import SignUpDialog from '../signup-dialog'
import Connectors from './connectors'
import OAuth from './oauth'
import { authorizerInstance } from '@/services/authorizer'

// Form validation schemas
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
})

const formMissingInformationSchema = z.object({
  email: z.string().email(),
  nickname: z.string().min(1, {
    message: 'Nickname is required',
  }),
})

// Global state store for managing sign-in dialog visibility
export const useSignInDialog = create<{
  openSignInDialog: boolean
  setOpenSignInDialog: (openSignInDialog: boolean) => void
}>()((set) => ({
  openSignInDialog: false,
  setOpenSignInDialog: (openSignInDialog: boolean) => set({ openSignInDialog }),
}))

/**
 * SignInDialog Component
 *
 * Handles user authentication with multiple sign-in methods:
 * - Email/password authentication
 * - Wallet connection
 * - OAuth providers
 *
 * Also manages missing user information collection after successful authentication
 */
export default function SignInDialog() {
  // Loading state for form submissions
  const [loading, setLoading] = useState(false)

  // Dialog visibility states
  const { openSignInDialog, setOpenSignInDialog } = useSignInDialog()
  const [openSignupModal, setOpenSignupModal] = useState(false)
  const [openMissingInformationModal, setOpenMissingInformationModal] = useState(false)
  const [shouldDisableNickname, setShouldDisableNickname] = useState(false)
  const [shouldDisableEmail, setShouldDisableEmail] = useState(false)

  // User management
  const { setUser, fetchUserProfile } = useUserStore()

  // URL parameters and routing
  const searchParams = useSearchParams()
  const accessTokenFromUrl = searchParams.get('access_token') // OAuth callback token
  const router = useRouter()

  // Form instances
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const formMissingInformation = useForm<z.infer<typeof formMissingInformationSchema>>({
    resolver: zodResolver(formMissingInformationSchema),
    defaultValues: {
      email: '',
      nickname: '',
    },
  })

  /**
   * Handles OAuth callback token processing
   * - Stores token in session storage
   * - Removes token from URL for security
   * - Fetches user profile and handles verification status
   */
  async function tokenHandler(access_token: string, refresh_token?: string) {
    try {
      sessionStorage.setItem('access_token', access_token)
      router.replace(location.pathname) // Remove token from URL
      const profile = await getUserProfile()
      if (!profile) {
        toast.error('Failed to get your profile')
        return
      }
      if (!profile.nickname || !profile.email) {
        setOpenSignInDialog(false)
        setOpenMissingInformationModal(true)
        if (profile.nickname) {
          formMissingInformation.setValue('nickname', profile.nickname)
          // Disable the nickname field if it already has a value
          setShouldDisableNickname(true)
        }
        if (profile.email) {
          formMissingInformation.setValue('email', profile.email)
          // Disable the email field if it already has a value
          setShouldDisableEmail(true)
        }
      } else {
        if (profile?.email_verified_at) {
          setOpenSignInDialog(false)
          setUser(profile)
          setAccessToken(access_token)
          if (refresh_token) {
            setRefreshToken(refresh_token || '')
          } else {
            const tokens = await authorizerInstance.getSession({
              Authorization: `Bearer ${access_token}`,
            })
            if (tokens.refresh_token) setRefreshToken(tokens.refresh_token)
          }
          toast.success('Login successfully')
        } else {
          await resendVerifyEmail(
            profile.email,
            profile.signup_methods.includes('basic_auth') ? 'basic_auth_signup' : 'update_email'
          )
          toast.info(
            <div>We have sent a verification email to your email address. Please verify your email first.</div>
          )
        }
      }
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    }
  }

  // Initialize authentication state on component mount
  useEffect(() => {
    if (accessTokenFromUrl) {
      tokenHandler(accessTokenFromUrl!) // Handle OAuth callback
    } else {
      fetchUserProfile() // Check existing session
    }
  }, [])

  /**
   * Handles email/password sign-in form submission
   * - Authenticates user with credentials
   * - Manages token storage (session and local)
   * - Handles email verification and profile completion
   */
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
      const response = await login(values.email, values.password)
      const accessToken = response?.access_token
      if (accessToken) {
        await tokenHandler(accessToken, response?.refresh_token)
      }
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  /**
   * Handles missing information form submission
   * Currently logs the values - needs implementation for updating user profile
   */
  const onSubmitMissingInformation = async (values: z.infer<typeof formMissingInformationSchema>) => {
    try {
      setLoading(true)
      // TODO: Implement API call to update user profile with missing information
      await updateUserProfile(values)
      setOpenMissingInformationModal(false)
      if (formMissingInformation.getFieldState('email').isDirty) {
        toast.info(<div>We have sent a verification email to your email address. Please verify your email first.</div>)
      } else {
        // Refetch user profile to update state
        setAccessToken(sessionStorage.getItem('access_token') || '')
        await fetchUserProfile()
        formMissingInformation.reset()
        setShouldDisableNickname(false)
        setShouldDisableEmail(false)
        toast.success('Profile updated successfully')
      }
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Main Sign-In Dialog */}
      <Dialog open={openSignInDialog} onOpenChange={setOpenSignInDialog}>
        <DialogContent className=''>
          <DialogHeader className='hidden'>
            <DialogTitle>Sign In</DialogTitle>
          </DialogHeader>
          <div className='flex items-center flex-col w-full gap-5'>
            <div className='text-center font-bold w-full'>Sign in to Punkga</div>
            <div className='grid grid-cols-2 divide-x divide-Border-border-primary w-full'>
              {/* Wallet Connection Section */}
              <div className='pr-4 space-y-3'>
                <div className='font-semibold'>Sign in with wallet</div>
                <div className='text-sm'>
                  If you don&apos;t have a wallet, you can select a provider and create one now
                </div>
                <Connectors tokenHandler={tokenHandler} />
              </div>
              {/* Email/Password Sign-In Section */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='pl-4 space-y-4'>
                  <div className='font-semibold'>Sign in with email</div>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder='Eg: your.email@example.com' type='email' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='space-y-2'>
                    <FormField
                      control={form.control}
                      name='password'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input placeholder='Enter your password' type='password' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Forgot Password Link */}
                    <div className='text-xs text-Text-Default-text-quaternary cursor-pointer w-fit hover:text-Text-Link-text-link-primary ml-auto'>
                      Forgot password?
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className='mx-auto w-fit'>
                    <Button type='submit' className='min-w-[10rem] mx-auto' disabled={loading}>
                      {loading ? <Loader2 className='animate-spin' /> : null}
                      Sign In
                    </Button>
                  </div>
                  {/* Sign Up Link */}
                  <div className='text-xs text-center w-full'>
                    Don&apos;t have an account?{' '}
                    <span
                      onClick={() => {
                        setOpenSignInDialog(false)
                        setOpenSignupModal(true)
                      }}
                      className='text-Text-Link-text-link-primary cursor-pointer hover:underline'>
                      Sign Up
                    </span>
                  </div>
                  <div className='text-center text-xs w-full'>or</div>
                  {/* OAuth Providers */}
                  <OAuth />
                  {/* Terms and Conditions */}
                  <div className='text-xs text-center'>
                    By continuing, you agree to our{' '}
                    <Link
                      href='/terms-and-conditions'
                      className='text-Text-Link-text-link-primary cursor-pointer hover:underline'>
                      Terms and Conditions
                    </Link>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Missing Information Dialog */}
      <Dialog open={openMissingInformationModal} onOpenChange={setOpenMissingInformationModal}>
        <DialogContent className='!max-w-md'>
          <DialogHeader>
            <DialogTitle>Update your information</DialogTitle>
            <DialogDescription className='text-sm text-Text-Default-text-tertiary'>
              An email and nickname are required to complete your profile. Please update your information to continue.
            </DialogDescription>
          </DialogHeader>
          <Form {...formMissingInformation}>
            <form onSubmit={formMissingInformation.handleSubmit(onSubmitMissingInformation)} className='space-y-3'>
              <FormField
                control={formMissingInformation.control}
                name='nickname'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nickname</FormLabel>
                    <FormControl>
                      <Input placeholder='Eg: MangaFan42' {...field} disabled={shouldDisableNickname} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formMissingInformation.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Eg: your.email@example.com' {...field} disabled={shouldDisableEmail} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='w-fit ml-auto'>
                <Button type='submit' disabled={loading}>
                  {loading ? <Loader2 className='animate-spin' /> : null}
                  Update
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      {/* Sign Up Dialog Component */}
      <SignUpDialog open={openSignupModal} setOpen={setOpenSignupModal} />
    </>
  )
}
