import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import BigNumber from 'bignumber.js'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
export function formartNumberWithComma(num: number) {
  // Split number into integer and decimal parts
  const parts = num.toString().split('.')

  // Add commas to the integer part
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  // Join back with decimal part if it exists
  return parts.join('.')
}
export function formatBalance(balance: string | number | bigint, decimals: number = 18) {
  if (!balance) return '0'

  const bn = new BigNumber(balance)
  const divisor = new BigNumber(10).pow(decimals)
  const result = bn.dividedBy(divisor)

  // If the result is less than 0.00001, return '0'
  if (result.isLessThan(0.00001)) {
    return '0'
  }

  // Format with commas for thousands separators and limit to 3 decimal places
  return result.toFormat(3, {
    groupSize: 3,
    groupSeparator: ',',
    decimalSeparator: '.',
  })
}
export function formatCompactNumber(num?: number): string {
  if (!num) return '0'
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'b'
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  }
  return num.toString()
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function shortenAddress(address?: string, chars = 4): string {
  if (!address) {
    return ''
  }
  return `${address.slice(0, chars)}...${address.slice(-chars)}`
}