import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Loader } from 'lucide-react'

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap font-semibold transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:shadow-[0px_0px_0px_4px_var(--Border-border-ring-brand,rgba(0,225,96,0.40))]",
  {
    variants: {
      variant: {
        default:
          'bg-Button-Type-Sold-Primary-background-color text-Button-Type-Sold-Primary-text-color shadow-xs hover:bg-Button-Type-Sold-Primary-background-color_hover hover:text-Button-Type-Sold-Primary-text-color_hover disabled:bg-Button-Type-Sold-Primary-background-color_disable disabled:text-Button-Type-Sold-Primary-text-color_disable',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-Button-Type-Outline-Primary-background-color text-Button-Type-Outline-Primary-text-color border-Button-Type-Outline-Primary-border-color shadow-xs hover:bg-Button-Type-Outline-Primary-background-color_hover hover:text-Button-Type-Outline-Primary-text-color_hover disabled:border-Button-Type-Outline-Primary-border-color_disable disabled:bg-Button-Type-Outline-Primary-background-color_disable disabled:text-Button-Type-Outline-Primary-text-color_disable',
        'outline-tertiary':
          'border bg-Button-Type-Outline-Tertiary-background-color text-Button-Type-Outline-Tertiary-text-color border-Button-Type-Outline-Tertiary-border-color shadow-xs hover:bg-Button-Type-Outline-Tertiary-background-color_hover hover:text-Button-Type-Outline-Tertiary-text-color_hover disabled:border-Button-Type-Outline-Tertiary-border-color_disable disabled:bg-Button-Type-Outline-Tertiary-background-color_disable disabled:text-Button-Type-Outline-Tertiary-text-color_disable',
        'outline-secondary':
          'border bg-Button-Type-Outline-Secondary-background-color text-Button-Type-Outline-Secondary-text-color border-Button-Type-Outline-Secondary-border-color shadow-xs hover:bg-Button-Type-Outline-Secondary-background-color_hover hover:text-Button-Type-Outline-Secondary-text-color_hover disabled:border-Button-Type-Outline-Secondary-border-color_disable disabled:bg-Button-Type-Outline-Secondary-background-color_disable disabled:text-Button-Type-Outline-Secondary-text-color_disable',
        secondary:
          'bg-Button-Type-Sold-Secondary-background-color text-Button-Type-Sold-Secondary-text-color shadow-xs hover:bg-Button-Type-Sold-Secondary-background-color_hover hover:text-Button-Type-Sold-Secondary-text-color_hover disabled:bg-Button-Type-Sold-Secondary-background-color_disable disabled:text-Button-Type-Sold-Secondary-text-color_disable',
        ghost:
          'text-Text-Brand-text-brand-primary hover:bg-Surface-Background-bg-primary_hover disabled:bg-Surface-Background-bg-disabled disabled:text-Text-Disabled-text-disabled',
        link: 'underline-offset-4 hover:underline text-Text-Brand-text-brand-primary hover:bg-Surface-Background-bg-primary_hover disabled:bg-Surface-Background-bg-disabled disabled:text-Text-Disabled-text-disabled',
      },
      size: {
        default: 'h-8 px-2.5 py-1 text-xs rounded-sm',
        '2xs': 'h-8 px-2.5 py-1 text-xs rounded-sm',
        xs: 'h-9 px-2.5 py-1 text-sm rounded-sm',
        sm: 'h-10 px-3 py-1.5 text-sm rounded-md',
        md: 'h-11 px-3.5 py-2 text-sm rounded-md',
        lg: 'h-12 px-4 py-2 text-base rounded-md',
        xl: 'h-[52px] px-[18px] py-2 text-lg rounded-md',
        '2xl': 'h-[60px] px-[18px] py-2.5 text-xl rounded-md',
        icon: 'size-9 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    isLoading?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading || props.disabled}
      {...props}>
      {isLoading ? (
        <>
          <Loader className='animate-spin' />
          {props.children}
        </>
      ) : (
        props.children
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
