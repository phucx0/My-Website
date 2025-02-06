"use client";
import "@/styles/css/shapeMessage.css"
import { useFriendInfo } from "../provider/ChatProvider";

interface MessageInterface{
  id: number,
  user_id: number,
  content: string,
  timestamp: string
}

export default function MessageList() {
  const {Friend} =  useFriendInfo()

  const myID = 123;

//   const messages : MessageInterface[] = [
//     { id: 1, user_id: 129038123, content: 'Hello!', timestamp: '10:00 AM' },
//     { id: 2, user_id: 123, content: 'Hi, how are you?', timestamp: '10:01 AM' },
//     { id: 3, user_id: 129038123, content: 'I’m good, thanks! What about you?', timestamp: '10:02 AM' },
//     { id: 4, user_id: 123, content: 'Doing well. Just started working on a project.', timestamp: '10:03 AM' },
//     { id: 5, user_id: 129038123, content: 'That’s great! What kind of project is it?', timestamp: '10:04 AM' },
//     { id: 6, user_id: 123, content: 'It’s a web app. Still in the early stages.', timestamp: '10:05 AM' },
//     { id: 7, user_id: 129038123, content: 'Sounds interesting! Let me know if you need help.', timestamp: '10:06 AM' },
//     { id: 8, user_id: 123, content: 'Sure, thanks! How’s your day going?', timestamp: '10:07 AM' },
//     { id: 9, user_id: 129038123, content: 'Pretty busy, but I managed to take a break now.', timestamp: '10:08 AM' },
//     { id: 10, user_id: 123, content: 'Breaks are important. Don’t overwork yourself.', timestamp: '10:09 AM' },
//     { id: 11, user_id: 129038123, content: 'Absolutely. Thanks for reminding me!', timestamp: '10:10 AM' },
//     { id: 12, user_id: 123, content: 'No problem. Catch up later?', timestamp: '10:11 AM' },
//     { id: 13, user_id: 129038123, content: 'Sure, talk to you later!', timestamp: '10:12 AM' },
// ];

const messages: MessageInterface[] = [];

  return (
    <div className="flex-1 bg-[#1d1d1d] p-[16px] flex flex-col gap-3 overflow-x-hidden">
      {messages && messages.length > 0 ? (
      messages.map((message) => (
        <div className={`flex ${message.user_id === myID ? "justify-end" : "justify-start"}`}>
          <div className={`flex flex-row items-center bg-dark-m rounded-[8px] p-2`}>
            <span className="min-w-[50px] max-w-[300px] text-[14px]">
              {message.content}
            </span>
            <span className={`pl-1 text-[#5e5e5e] text-xs flex items-end h-full`}>
              {message.timestamp}
            </span>
          </div>
        </div>
      ))) : (
        <div className="text-[#5e5e5e] text-center flex h-screen items-center justify-center">
          No messages yet. Start the conversation!
        </div>
      )}
    </div>
  );
}
  