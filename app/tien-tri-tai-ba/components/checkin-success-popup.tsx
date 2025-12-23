
"use client";

import Image from 'next/image';
import a13 from '@/assets/advisors/Advisor_13_Mascot.png';
import ModalBorder from './modal-border';

interface CheckinSuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckinSuccessPopup = ({ isOpen, onClose }: CheckinSuccessPopupProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 px-4 bg-black/50'>
      <ModalBorder className='max-w-sm w-full'>
        <div className='text-center'>
          <h2 className='text-2xl font-paytone-one font-bold mb-4 text-[#A52A2A]'>Check-in Thành công</h2>
          <div className='w-32 h-32 relative mx-auto mb-4'>
            <Image src={a13} alt='Success' layout='fill' objectFit='contain' />
          </div>
          <p className='mb-6 text-lg font-bold text-gray-700'>+15 Star</p>
          <button
            onClick={onClose}
            className='bg-[#D73930] text-white px-8 py-3 rounded-md font-paytone-one text-lg w-full'>
            Đóng
          </button>
        </div>
      </ModalBorder>
    </div>
  )
};

export default CheckinSuccessPopup;
