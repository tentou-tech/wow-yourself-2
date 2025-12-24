import Facebook from '@/assets/images/logo/Facebook.png'
import Google from '@/assets/images/logo/Google.png'
import Zalo from '@/assets/images/logo/Zalo.png'
import Image from 'next/image'
import { Button } from '../ui/button'
export default function OAuth() {
  const oauth = async (provider: string) => {
    location.replace(
      `${process.env.NEXT_PUBLIC_AUTHORIZER_URL}/oauth_login/${provider}?redirect_uri=${location.href}&state=offline_access`
    )
  }
  return (
    <div className='w-full grid grid-cols-3 gap-2'>
      <Button type='button' variant='outline-tertiary' onClick={() => oauth('facebook')}>
        <Image src={Facebook} className='size-5' alt='Facebook' />
      </Button>
      <Button type='button' variant='outline-tertiary' onClick={() => oauth('zalo')}>
        <Image src={Zalo} className='size-5' alt='Zalo' />
      </Button>
      <Button type='button' variant='outline-tertiary' onClick={() => oauth('google')}>
        <Image src={Google} className='size-5' alt='Google' />
      </Button>
    </div>
  )
}
