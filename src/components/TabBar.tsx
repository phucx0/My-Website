import Link from "next/link"
import { Tooltip } from "./Tooltip"
export const TabBar = () => {
    // const [name, setName] = useState('chats')

    return(
        <div className="h-screen px-[8px] py-[16px] w-[55px] bg-[#1d1d1d] flex flex-col items-center border-r-[2px] border-[#2b2b2b]">
            <div className="logo mb-[24px] p-1">
                <img className='' src="/images/logo.png" alt="logo"/>
            </div>
            <div className="flex flex-col flex-1 gap-[24px] items-center">
                <Link href={'/home'}>
                    <Tooltip 
                        title="Hello"
                        content=""
                        direction={"left"}
                    >
                        <div className={`bg-[#2b2b2b] rounded-full p-2 flex items-center justify-center`}>
                            <img src="/images/chats.png" alt="logo"/>
                        </div>
                    </Tooltip>
                </Link>
                <Link href={'/friends'}>
                    <div className="bg-[#2b2b2b] rounded-full p-2 flex items-center justify-center">
                        <img src="/images/friends.png" alt="logo"/>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col gap-[24px]">
                <Link href={'/setting'}>
                    <Tooltip 
                        title="Hello"
                        content="This is a tooltip message"
                        direction={"top"}
                    >
                        <div className="bg-[#2b2b2b] rounded-full p-2 flex items-center justify-center">
                            <img src="/images/setting.png" alt="logo"/>
                        </div>
                    </Tooltip>
                </Link>
                <Link href={'/support'}>
                    <div className="bg-[#2b2b2b] rounded-full p-2 flex items-center justify-center">
                        <img src="/images/support.png" alt="logo"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}