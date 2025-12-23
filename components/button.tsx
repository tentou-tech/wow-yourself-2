import LeftPartButtonBackground from '@/assets/left_part-button.svg'
import MiddlePartButtonBackground from '@/assets/middle_part-button.png'
import RightPartButtonBackground from '@/assets/right_part-button.svg'
import cn from 'classnames'
export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children, ...rest } = props
  return (
    <button
      className={cn(
        `font-paytone-one text-xl lg:text-2xl cursor-pointer relative rounded-full overflow-hidden border-[3px] pb-1 h-11 lg:h-14 px-16 border-[#3D0400] font-extrabold text-[#3D0400] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`,
        className
      )}
      style={{
        backgroundImage: `url(${LeftPartButtonBackground.src}),url(${RightPartButtonBackground.src}), url(${MiddlePartButtonBackground.src})`,
        backgroundSize: 'auto 100%, auto 100%, 100% 100%',
        backgroundPosition: 'left center, right center, center',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
      }}
      {...rest}>
      {children}
    </button>
  )
}
