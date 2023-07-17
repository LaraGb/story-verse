import React from 'react';
import routesData from '@/data/route/routesData';
import UserAvatarField from '@/shared/components/global/user-avatar-field/UserAvatarField';
import pageIcons from '@/shared/utils/pageIcons';
import ItemBar from './components/ItemBar';

export default function SideBar() {
  return (
   <div className="h-full py-8 px-[2vw] overflow-y-auto bg-white">
      <div className='h-full flex flex-col  items-center space-y-10'>
         <div className='text-primary'>
            Medi Track
         </div>

         <div className='grow'>
            <ul className='flex flex-col space-y-2'>
               {
                routesData?.map(route => (
                     <ItemBar key={route.path} {...route}/>
                  )
                 )
               }
            </ul>
         </div>

         <div>
           <UserAvatarField name='userName' info='Sair' Icon={pageIcons.LogOut}/>
         </div>
      </div>
   </div>
  )
}

