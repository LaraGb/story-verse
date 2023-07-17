import React from 'react';
import Dropdown from '@/shared/components/global/dropdown/Dropdown';
import UserAvatarField from '@/shared/components/global/user-avatar-field/UserAvatarField';
import pageIcons from '@/shared/utils/pageIcons';

export default function OptionsField() {
  return (
    <>
       <Dropdown 
         visibleContent={<UserAvatarField name='userName' info='Human' Icon={pageIcons.ArrowDown}
       />}>
         <div>
            
         </div>
       </Dropdown>
    </>
  )
}
