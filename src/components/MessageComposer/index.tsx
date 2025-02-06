import { ActionButton } from "./ActionButton"
import { MessageInput } from "./MessageInput"
import { SendButton } from "./SendButton"

export const MessageComposer = () =>{
    return(
        <div className={`flex flex-row gap-[8px] items-center px-[16px] py-[10px] bg-dark-xl`}>
            <ActionButton/>
            <MessageInput/>
            <SendButton/>
        </div>
    )
}