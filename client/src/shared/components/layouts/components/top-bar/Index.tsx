import React from 'react'
import WideWrapping from '@/shared/components/global/wide-wrapping/Index';
import Center from '@/shared/components/global/center/Index';
import StylizedLink from '@/shared/components/global/stylized-button/Index';
import Logo from '@/shared/components/global/logo/Logo';
import Notification from './components/Notification';

export default function Index() {
  return (
      <div className='py-4'>
      <WideWrapping>
        <div className='flex justify-between items-center'>
          <Logo/>
          <Center spaceXValue={8}>
            <Notification/>
            <Center>
             <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&usqp=CAU"/>
              <div className='font-medium'>
                <div className='text-sm'>Jese Leos</div>
                <div className="text-xs text-gray-500">Humano</div>
              </div>
            </Center>
          </Center>
        </div>
      </WideWrapping>
    </div>
  )
}

