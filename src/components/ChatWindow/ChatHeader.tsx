"use client"
import Image from "next/image"
import { useFriendInfo } from "../provider/ChatProvider"
import { Icons } from "@/app/constants"
export const ChatHeader = () => {
    const {Friend} = useFriendInfo()
    return(
        <div className="bg-[#2b2b2b] px-[16px] py-[8px]">
            <div className="flex flex-row gap-2 items-center">
                <div className="block md:hidden">
                    <Image 
                        className="w-[16px]"
                        src={Icons.Left}
                        alt="back"
                    />
                </div>
                <div className="">
                    <img className="w-[40px] h-[40px]" src="/images/user.png" alt="friend" />
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-sm">
                        {Friend?.first_name} {Friend?.last_name}
                    </div>
                    <div className="flex flex-row gap-1 items-center text-xs">
                        {Friend?.is_online ? (
                            <>
                                <div className="w-[10px] h-[10px] bg-[#59FA1F] rounded-full"></div>
                                <div>Online</div>
                            </>
                        ) : (
                            <>
                                <div className="w-[10px] h-[10px] bg-[#bb1d1d] rounded-full"></div>
                                <div>Online</div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}