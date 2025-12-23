
"use client";

import { useState } from 'react';
import Image from 'next/image';
import ModalBorder from './modal-border';
import a13 from '@/assets/advisors/Advisor_13_Mascot.png';

interface QuizPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizPopup = ({ isOpen, onClose }: QuizPopupProps) => {
  const [step, setStep] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleConfirm = () => {
    // Logic to check answer would go here
    setStep(2);
  };

  const handleClose = () => {
    setStep(1);
    setSelectedAnswer(null);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 px-4 bg-black/50'>
      {step === 1 && (
        <ModalBorder className='max-w-lg w-full'>
          <h2 className='text-2xl font-paytone-one font-bold mb-4 text-center'>Daily Question</h2>
          <p className='mb-6 text-center'>
            Lorem ipsum dolor sit amet consectetur. Iaculis diam iaculis amet at amet tellus lacus. Id quam in
            adipiscing nec at dui sed. Suspendisse nibh feugiat volutpat tempus. Sagittis tortor lacus ipsum pharetra
            nec. Nunc iaculis elementum at eget.
          </p>
          <div className='grid grid-cols-2 gap-4 mb-6'>
            <button
              className={`p-4 rounded-md text-left ${selectedAnswer === 'A' ? 'bg-blue-300' : 'bg-gray-200'}`}
              onClick={() => setSelectedAnswer('A')}>
              A. 12354
            </button>
            <button
              className={`p-4 rounded-md text-left ${selectedAnswer === 'B' ? 'bg-blue-300' : 'bg-gray-200'}`}
              onClick={() => setSelectedAnswer('B')}>
              B. sdfsdf
            </button>
            <button
              className={`p-4 rounded-md text-left ${selectedAnswer === 'C' ? 'bg-blue-300' : 'bg-gray-200'}`}
              onClick={() => setSelectedAnswer('C')}>
              C. sdfsdf
            </button>
            <button
              className={`p-4 rounded-md text-left ${selectedAnswer === 'D' ? 'bg-red-300' : 'bg-gray-200'}`}
              onClick={() => setSelectedAnswer('D')}>
              D. sdfsdf
            </button>
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
};

export default QuizPopup;
