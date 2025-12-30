/* eslint-disable react-hooks/purity */
'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import ModalBorder from './modal-border'
import a13 from '@/assets/advisors/Advisor_13_Mascot.png'
import { answerQuiz, claimQuest, Quest } from '@/services/tttb'
import { toast } from 'sonner'

interface QuizPopupProps {
  isOpen: boolean
  onClose: () => void
  quizQuest?: Quest
  callback: (id: number, onReveal?: () => void) => void
}

const QuizPopup = ({ isOpen, onClose, quizQuest, callback }: QuizPopupProps) => {
  const [step, setStep] = useState(1)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const handleConfirm = async () => {
    if (!selectedAnswer) {
      return
    }
    if (selectedAnswer !== quizQuest?.requirement.quiz.multiple_choice[0].correct_answer) {
      toast.error('Câu trả lời sai, vui lòng thử lại!')
      onClose()
      setSelectedAnswer(null)
      return
    } else {
      await answerQuiz(quizQuest.id, selectedAnswer)
      const res = await claimQuest(quizQuest.id)
      callback(res.requestId, () => {
        setStep(2)
      })
    }
  }

  const handleClose = () => {
    setStep(1)
    setSelectedAnswer(null)
    onClose()
  }
  const answerList = useMemo(() => {
    if (!quizQuest) {
      return []
    }
    return [
      ...quizQuest.requirement.quiz.multiple_choice[0].wrong_answer,
      quizQuest.requirement.quiz.multiple_choice[0].correct_answer,
    ].sort(() => 0.5 - Math.random())
  }, [quizQuest])

  if (!isOpen || !quizQuest) {
    return null
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 px-4 '>
      <div className='fixed inset-0 bg-black/50' onClick={onClose}></div>
      {step === 1 && (
        <ModalBorder className='max-w-lg w-full'>
          <h2 className='text-2xl font-paytone-one font-bold mb-4 text-center'>Đố vui mỗi ngày</h2>
          <p className='mb-6 text-center'>{quizQuest?.requirement?.quiz.multiple_choice[0].question}</p>
          <div className='grid grid-cols-2 gap-4 mb-6'>
            {answerList.map((option, index) => {
              const optionLabel = String.fromCharCode(65 + index) // Convert 0 -> A, 1 -> B, etc.
              return (
                <button
                  key={option}
                  className={`p-4 rounded-md text-left text-sm ${
                    selectedAnswer === option ? 'bg-yellow-300' : 'bg-gray-200'
                  }`}
                  onClick={() => setSelectedAnswer(option)}>
                  {optionLabel}. {option}
                </button>
              )
            })}
          </div>
          <button
            onClick={handleConfirm}
            className='bg-[#D73930] text-white px-8 py-3 rounded-md font-paytone-one text-lg w-full'>
            Xác Nhận
          </button>
        </ModalBorder>
      )}
      {step === 2 && (
        <ModalBorder className='max-w-sm w-full'>
          <div className='text-center'>
            <h2 className='text-2xl font-paytone-one font-bold mb-4 text-[#A52A2A]'>Chính Xác</h2>
            <div className='w-32 h-32 relative mx-auto mb-4'>
              <Image src={a13} alt='Success' layout='fill' objectFit='contain' />
            </div>
            <p className='mb-6 text-lg font-bold text-gray-700'>+15 Star</p>
            <button
              onClick={handleClose}
              className='bg-[#D73930] text-white px-8 py-3 rounded-md font-paytone-one text-lg w-full'>
              Đóng
            </button>
          </div>
        </ModalBorder>
      )}
    </div>
  )
}

export default QuizPopup
