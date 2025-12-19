
import React from 'react';
import BorderT from '@/assets/border-t.png';
import BorderB from '@/assets/border-b.png';
import BorderL from '@/assets/border-l.png';
import BorderR from '@/assets/border-r.png';

interface ModalBorderProps {
  children: React.ReactNode;
  className?: string;
}

const ModalBorder = ({ children, className }: ModalBorderProps) => {
  return (
    <div className={`relative bg-[#FDF9EE] rounded-[10px] p-8 border-2 border-black overflow-hidden ${className}`}>
      <div 
        className="absolute top-0 left-0 w-full h-8 opacity-50"
        style={{
          backgroundImage: `url(${BorderT.src})`,
          backgroundSize: 'auto 100%',
          backgroundRepeat: 'repeat-x',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-8 opacity-50"
        style={{
          backgroundImage: `url(${BorderB.src})`,
          backgroundSize: 'auto 100%',
          backgroundRepeat: 'repeat-x',
        }}
      />
      <div 
        className="absolute top-0 left-0 w-8 h-full opacity-50"
        style={{
          backgroundImage: `url(${BorderL.src})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'repeat-y',
        }}
      />
      <div 
        className="absolute top-0 right-0 w-8 h-full opacity-50"
        style={{
          backgroundImage: `url(${BorderR.src})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'repeat-y',
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ModalBorder;
