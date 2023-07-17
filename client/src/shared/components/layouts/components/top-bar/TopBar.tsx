import React from "react";
import WideWrapping from "@/shared/components/global/wide-wrapping/WideWrapping";
import Center from "@/shared/components/global/center/Index";
import Logo from "@/shared/components/global/logo/Logo";
import Notification from "./components/Notification";
import Dropdown from "@/shared/components/global/dropdown/Dropdown";
import UserAvatarField from "@/shared/components/global/user-avatar-field/UserAvatarField";
import pageIcons from "@/shared/utils/pageIcons";
import IconCircleBtn from "@/shared/components/global/icon-circle-btn/IconCircle";
import OptionsField from "./components/OptionsField";

type TTopBar = {
  setIsSideBarOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TopBar({setIsSideBarOpen}:TTopBar) {
  return (
    <div className="py-4">
      <WideWrapping>
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-6">
            <Notification />
            <OptionsField/>
            <div className="block md:hidden">
             <IconCircleBtn
               onClick={()=>setIsSideBarOpen(state => !state)}
               icon={<pageIcons.Menu />}
             />
            </div>
          </div>
        </div>
      </WideWrapping>
    </div>
  );
}
