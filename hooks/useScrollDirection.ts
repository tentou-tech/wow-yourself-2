import { useState, useEffect, RefObject } from 'react'

type ScrollDirection = 'up' | 'down' | 'none'

/**
 * A hook that tracks the user's scroll direction (up, down, or none)
 * @param threshold - The minimum scroll distance required to change direction (default: 10)
 * @param elementRef - Optional ref to the element to track scrolling within (default: window)
 * @returns The current scroll direction
 */
export function useScrollDirection(threshold: number = 100, elementRef?: RefObject<HTMLElement>): ScrollDirection {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('none')

  useEffect(() => {
    // Determine the target element (either the provided ref or window)
    const targetElement = elementRef?.current || window

    // Initialize last scroll position
    let lastScrollY = elementRef?.current ? (targetElement as HTMLElement).scrollTop : window.scrollY

    // Function to handle scroll events
    const updateScrollDirection = () => {
      // Get current scroll position based on target element
      const scrollY = elementRef?.current ? (targetElement as HTMLElement).scrollTop : window.scrollY
      const direction = scrollY > lastScrollY ? 'down' : 'up'

      // We only set the scroll direction if the scroll difference is greater than the threshold
      if (Math.abs(scrollY - lastScrollY) > threshold) {
        setScrollDirection(direction)
        lastScrollY = scrollY > 0 ? scrollY : 0
      }
    }

    // Add scroll event listener to the appropriate target
    targetElement.addEventListener('scroll', updateScrollDirection)

    // Clean up the event listener when component unmounts
    return () => {
      targetElement.removeEventListener('scroll', updateScrollDirection)
    }
  }, [threshold, elementRef])

  return scrollDirection
}
