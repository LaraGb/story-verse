import React from "react";
import pageIcons from "@/shared/utils/pageIcons";
import IconCircle from "@/shared/components/global/icon-circle-btn/IconCircle";

const Notification = () => {
  return (
    <IconCircle>
      <pageIcons.Bell fontSize={"1rem"} />
    </IconCircle>
  );
};

export default Notification;
