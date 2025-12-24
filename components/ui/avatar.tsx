'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'
import AvatarPlaceHolder from '@/assets/images/Avatar.png'
import Image from 'next/image'

function AvatarRoot({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot='avatar'
      className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image data-slot='avatar-image' className={cn('aspect-square size-full', className)} {...props} />
  )
}

function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot='avatar-fallback'
      className={cn('bg-muted flex size-full items-center justify-center rounded-full', className)}
      {...props}>
      <Image src={AvatarPlaceHolder} alt='Avatar' />
    </AvatarPrimitive.Fallback>
  )
}
function Avatar({ src, className }: { src: string | undefined | null; className?: string }) {
  return (
    <AvatarRoot className={className}>
      <AvatarImage src={src || undefined} />
      <AvatarFallback />
    </AvatarRoot>
  )
}
export { Avatar, AvatarRoot, AvatarImage, AvatarFallback }
