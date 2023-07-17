import React from 'react';
import Link from 'next/link';
import pageIcons from '@/shared/utils/pageIcons';
import Center from '../center/Index';


export default function Logo() {
  return (
    <Link href='/'>
      <Center>
        <pageIcons.Logo fontSize={'1.6rem'}/>
        <h1 className='text-lg font-bold'>MEDITRACK</h1>
      </Center>
    </Link>
  )
}
