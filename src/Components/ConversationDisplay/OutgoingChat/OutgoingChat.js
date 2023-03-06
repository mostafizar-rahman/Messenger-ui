import React from "react";

function OutgoingChat({message, time}) {
  return (
    <>
    <div className="clear-both"></div>
      <div className="mt-3">
        <p className="text-center text-xs">{time}</p>
        <div className="bg-[#7A8194] mt-3 max-w-[341px] w-auto py-3 px-2 rounded-[20px] float-right">
          <p className="text-end text-sm px-4 font-normal">{message}</p>
        </div>
        
      </div>
      <div className="clear-both"></div>
    </>
  );
}

export default OutgoingChat;
