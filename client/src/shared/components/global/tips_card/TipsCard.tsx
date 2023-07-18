import React from "react";
import Bold from "../bold/Bold";
import Animation from "../animation/Animation";
import Column from "../column/Column";

export default function TipsCard() {
  return (
    <div>

        <div className="h-52 bg-violet-300 flex items-center justify-center rounded-xl">
          <Animation/>
        </div>
        
        <div className="flex flex-col items-center py-4">
          <Bold>Meus Exames</Bold>
          <span className="text-sm">
            confira seus exames
          </span>
        </div>
        
    </div>
  );
}
