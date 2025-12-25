/* eslint-disable react-hooks/set-state-in-effect */

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Advisor10Mascot from '@/assets/advisors/advisor_10_mascot.png'
import Advisor11Mascot from '@/assets/advisors/advisor_11_mascot.png'
import Advisor12Mascot from '@/assets/advisors/advisor_12_mascot.png'
import ModalBorder from './modal-border'

const GuidePopup = () => {
  const [step, setStep] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const steps = [
    {
      title: 'Đăng nhập và điểm danh hằng ngày',
      description:
        'Từ 21/12/2025 mọi người dùng đăng ký tài khoản trên pvn.ga.me đều có thể truy cập trang sự kiện này để điểm danh hằng ngày và nhận về Star point',
      buttonText: 'Đã hiểu',
      image: Advisor10Mascot,
    },
    {
      title: 'Trả lời đố vui',
      description: 'Ngoài ra mỗi ngày đều sẽ có các câu đố vui. Tham gia để kiếm thêm Star Point nhé',
      buttonText: 'Đã hiểu',
      image: Advisor11Mascot,
    },
    {
      title: 'Star đổi quà',
      description: 'Star point có thể quy đổi ra các phần quà của ban tổ chức thông qua trang sự kiện này',
      buttonText: 'Tham gia',
      image: Advisor12Mascot,
    },
  ]

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenGuidePopup')
    if (!hasSeenPopup) {
      setIsOpen(true)
    }
  }, [])

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      handleClose()
    }
  }

  const handleClose = () => {
    localStorage.setItem('hasSeenGuidePopup', 'true')
    setIsOpen(false)
  }

  if (!isOpen) {
    return null
  }

  const currentStep = steps[step]

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 px-4 bg-black/50'>
      <ModalBorder className='max-w-md w-full'>
        <div className='text-center'>
          <h2 className='text-2xl font-paytone-one font-bold mb-4 text-[#A52A2A]'>Hướng dẫn cộng đồng</h2>
          <div className='w-32 h-32 relative mx-auto mb-4'>
            <Image src={currentStep.image} alt={currentStep.title} layout='fill' objectFit='contain' />
          </div>
          <h3 className='text-xl font-paytone-one font-bold mb-2'>{currentStep.title}</h3>
          <p className='mb-6 text-gray-700'>{currentStep.description}</p>
          <button
            onClick={handleNextStep}
            className='bg-[#D73930] text-white px-8 py-3 rounded-md font-paytone-one text-lg w-full'>
            {currentStep.buttonText}
          </button>
        </div>
      </ModalBorder>
    </div>
  )
}

export default GuidePopup
