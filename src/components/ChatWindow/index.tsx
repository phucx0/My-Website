"use client"
import { MessageComposer } from "../MessageComposer"
import { useFriendInfo } from "../provider/ChatProvider"
import { ChatHeader } from "./ChatHeader"
import MessageList from "./ChatWindow"
export const ChatWindow = () => {
    const {Friend} = useFriendInfo()
    return(
        <>
            {Friend && (
                <div className="flex flex-col flex-1 overflow-hidden h-screen">
                    <ChatHeader/>
                    <MessageList/>
                    <MessageComposer/>
                </div>
            )}
        </>
    )
}