import React from 'react';
import routesData from '@/data/route/routesData';
import UserAvatarField from '@/shared/components/global/user-avatar-field/UserAvatarField';
import pageIcons from '@/shared/utils/pageIcons';
import ItemBar from './components/ItemBar';

export default function SideBar() {
  return (
   <div className="h-full py-10 overflow-y-auto bg-white">
      <div className='h-full flex flex-col  items-center space-y-10'>
         <div>
            Medi Track
         </div>

         <div className='grow'>
            <ul className='flex flex-col space-y-1'>
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

