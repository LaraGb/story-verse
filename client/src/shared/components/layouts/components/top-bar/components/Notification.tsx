import React from "react";
import pageIcons from "@/shared/utils/pageIcons";
import IconCircle from "@/shared/components/global/icon-circle-btn/IconCircle";
import Center from "@/shared/components/global/center/Index";

const Notification = () => {
  return (
    <button className="linear py-2 px-3 rounded-xl text-xs text-slate-100">
      <Center>
        <pageIcons.Bell/>
        <span>12</span>
      </Center>
    </button>
  );
};

export default Notification;
