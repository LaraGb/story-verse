import React from 'react'
import Center from '../center/Index'
import { IconType } from 'react-icons';

type TUserAvatarField = {
    name:string;
    info:string;
    Icon:IconType
}

export default function UserAvatarField({name,info,Icon}:TUserAvatarField) {
  return (
      <Center>
       <img className="w-10 h-10 rounded-lg object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtoJ4N0ggR90ZkuuAKugKBf2fjqmKyuXEgQ&usqp=CAU" alt=""/>
       <div className="font-medium dark:text-white">
         <Center>
            <div>{name}</div>
            <Icon fontSize={'1rem'}/>
         </Center>
         <div className="text-sm text-gray-500 dark:text-gray-400">{info}</div>
       </div>
     </Center>
  )
}
