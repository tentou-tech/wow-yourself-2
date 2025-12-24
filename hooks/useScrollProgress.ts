import { useState, useEffect, RefObject } from 'react'

/**
 * A hook that tracks the scroll progress as a percentage (0-100)
 * @param elementRef - Optional ref to the element to track scrolling within (default: window)
 * @returns The current scroll progress as a percentage between 0 and 100
 */
export function useScrollProgress(elementRef?: RefObject<HTMLElement>): number {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0)

  useEffect(() => {
    // Determine the target element (either the provided ref or window)
    const targetElement = elementRef?.current || window

    // Function to calculate scroll percentage
    const calculateScrollPercentage = () => {
      if (elementRef?.current) {
        // For a specific element
        const element = targetElement as HTMLElement
        const scrollTop = element.scrollTop
        const scrollHeight = element.scrollHeight
        const clientHeight = element.clientHeight

        // Calculate percentage - how much has been scrolled relative to how much can be scrolled
        const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100
        
        // Ensure the percentage is between 0 and 100
        setScrollPercentage(Math.min(Math.max(percentage, 0), 100))
      } else {
        // For window
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight

        // Calculate percentage - how much has been scrolled relative to how much can be scrolled
        const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100
        
        // Ensure the percentage is between 0 and 100
        setScrollPercentage(Math.min(Math.max(percentage, 0), 100))
      }
    }

    // Calculate initial scroll position
    calculateScrollPercentage()

    // Add scroll event listener to the appropriate target
    targetElement.addEventListener('scroll', calculateScrollPercentage)

    // Clean up the event listener when component unmounts
    return () => {
      targetElement.removeEventListener('scroll', calculateScrollPercentage)
    }
  }, [elementRef])

  return scrollPercentage
}
