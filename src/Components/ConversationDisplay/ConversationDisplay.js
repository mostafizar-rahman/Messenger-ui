import React from "react";
import OutgoingChat from "./OutgoingChat/OutgoingChat";
import ReceivedChat from "./ReceivedChat/ReceivedChat";
function ConversationDisplay() {
  return (
    <div>
      <div className=" text-white mt-12">
        <ReceivedChat time='1 FEB 12:00' message='I commented on Figma, I want to add some fancy icons. Do you have any icon set?' />
        <OutgoingChat message='I am in a process of designing some. When do you need them?'/>
        <ReceivedChat message='Next month?' />
        <OutgoingChat time='8:12' message='I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish.'/>
        <OutgoingChat message='?'/>
        <ReceivedChat time='8:43' message='maciej.kowalski@email.com'/>
        <OutgoingChat message='👍'/>
      </div>
    </div>
  );
}

export default ConversationDisplay;
