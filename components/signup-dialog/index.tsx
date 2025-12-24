'use client'

import { signUp } from '@/services/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { useSignInDialog } from '../signin-dialog'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

export default function SignUpDialog({
  children,
  open,
  setOpen,
}: {
  children?: React.ReactNode
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const [loading, setLoading] = useState(false)
  const { setOpenSignInDialog } = useSignInDialog()

  const formSchema = z.object({
    username: z.string().min(1, {
      message: 'Username is required',
    }),
    email: z.string().email(),
    password: z.string().min(6, {
      message: 'Password must be at least 6 characters long',
    }),
    rePassword: z.string().min(6, {
      message: 'Re-password must be at least 6 characters long',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      rePassword: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)
      if (values.password !== values.rePassword) {
        toast.error('Passwords do not match')
        return
      }
      // Call signup API
      const res = await signUp(values.username, values.email, values.password)
      if (res) {
        toast.success('Sign up successfully. Please check your email to verify your account.')
        setOpen(false)
        setOpenSignInDialog(true)
        form.reset()
      }
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader className='hidden'>
            <DialogTitle>Sign Up</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <div className='flex flex-col items-center gap-2'>
                <div className='font-semibold'>Sign up to Punkga.me</div>
                <div className='text-sm'>Subcribe, receive notifications and unlock special chapters</div>
              </div>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='Eg: MangaFan24' type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name='rePassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder='Re-enter your password' type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='mx-auto w-fit'>
                <Button type='submit' className='min-w-[10rem]' disabled={loading}>
                  {loading ? <Loader2 className='animate-spin' /> : null}
                  Sign Up
                </Button>
              </div>
              <div className='text-center text-xs'>
                Already have an account?{' '}
                <span
                  onClick={() => {
                    setOpenSignInDialog(true)
                    setOpen(false)
                  }}
                  className='text-Text-Link-text-link-primary cursor-pointer hover:underline'>
                  Sign In
                </span>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}
