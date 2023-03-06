import React from "react";

function ReceivedChat({ message, time }) {
  return (
    <div>
      <p className="text-center text-xs">{time}</p>
      <div className="max-w-[341px] w-auto mt-3 bg-[#373E4E] py-3 px-2 rounded-[20px] float-left">
        <p className=" text-sm px-4 font-normal">{message}</p>
      </div>
    </div>
  );
}

export default ReceivedChat;
