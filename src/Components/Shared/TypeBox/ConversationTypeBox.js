import React from "react";
import { CiPaperplane } from "react-icons/ci";
import { AiOutlineCamera } from "react-icons/ai";

function ConversationTypeBox() {
  return (
    <div>
      <div className="bottom-[37px] absolute">
        <div className="relative">
          <div className="bg-[#9398A7] w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer absolute left-[8px]  top-1/2 -translate-y-1/2">
            <AiOutlineCamera className="text-[22px] " />
          </div>
          <input type="text" placeholder="Message" className="bg-[#3D4354] rounded-3xl w-96 h-12 px-12 text-white" />
          <div className="absolute right-[8px] cursor-pointer  top-1/2 -translate-y-1/2">
            <CiPaperplane className="text-[#9398A7] text-[26px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationTypeBox;
