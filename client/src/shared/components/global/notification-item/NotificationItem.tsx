import React from "react";
import Center from "../center/Index";
import pageIcons from "@/shared/utils/pageIcons";
import Bold from "../bold/Bold";

export default function NotificationItem() {
  return (
    <div className="py-4 flex items-center space-x-3 flex-wrap">
      <Center>
        <pageIcons.Bell />
        <span className="text-sm font-bold">Health appointment</span>
      </Center>
      <div className="text-xs">
        <p>10/05/2023</p>
      </div>
    </div>
  );
}
