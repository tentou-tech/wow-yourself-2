export const getRewardAmount = () => {
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() // 0-indexed (0 = Jan, 1 = Feb)
  const currentDate = now.getDate()

  // Period: 15/2 - 21/2
  // Month is 1 for February
  if (currentYear === 2026 && currentMonth === 1 && currentDate >= 15 && currentDate <= 21) {
    return 30
  }
  
  return 10
}
