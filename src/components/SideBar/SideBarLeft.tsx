"use client";
import '@/styles/css/SideBar.css'
import { useEffect, useState } from "react";
import { useFriendInfo } from "../provider/ChatProvider"
import { AddFriend } from "./AddFriend";
import { HideButton } from '../HideButton';
import { useRouter } from 'next/navigation';

export const SideBar = () => {
    return(
        <div className={`relative h-screen bg-[#1d1d1d] py-[16px] width-sidebar border-r-[2px] border-[#2b2b2b] overflow-hidden`}>
            <div className="w-full px-[8px]">
                {/* <div className="flex flex-row items-center justify-between mb-[16px]">
                    <div className="text-2xl font-bold">
                        Chats
                    </div>
                    <HideButton onClick={handleMinimize}/>
                </div> */}
                <div className="w-full flex flex-row items-center bg-[#2b2b2b] border-[2px] border-[#2b2b2b] p-2 mb-[16px] rounded-[16px]"> 
                    <img className='w-[16px] h-[16px]' src="/images/search.png" alt="search"/>
                    <input className="text-sm flex-1 bg-transparent px-2 outline-none text-[16px] placeholder-[#5e5e5e] no-underline" type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="overflow-y-auto h-full w-full">
                <Friends />
            </div>
            <AddFriend/>
        </div>
    )
}

interface Friend{
    id: number,
    user_id: number,
    username: string,
    first_name: string,
    last_name: string,
    year: number,
    create_at: number,
    update_at: number,
    is_premium: boolean,
    is_online: boolean,
    restrict: boolean
}

const Friends = () => {
    const [friends, setFriends] = useState<Friend[]>([])
    const {setFriend} = useFriendInfo()
    const router = useRouter()
    const handleSelectUser = (friend: Friend) => {
        setFriend(friend)
        router.push(`/home/${friend.id}`)
    };

    useEffect(() => {
        fetch('/user.json')
        .then((response) => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then((data) => {
            setFriends(data)
            console.log("Set friends successfully!")
        })
        .catch((error) => {
            console.error("Error fetching JSON:", error);
        })
    },[])

    return(
        <div className="px-[8px]">
            {friends.slice(0, 10).map((friend : Friend) => (
                <div 
                    key={friend.id}
                    onClick={()=>handleSelectUser(friend)}
                    className="flex flex-row items-center p-2 gap-2 border-b-[2px] border-[#2b2b2b] cursor-pointer">
                    <div className="w-[50px] h-[50px]">
                        <img src="/images/user.png" alt="user" />
                    </div>
                    <>
                        <div className="flex flex-col flex-1 h-full">
                            <div className="text-sm font-bold">
                                <p>{friend.first_name}</p>
                            </div>
                            <div className="text-xs text-[#5e5e5e]">
                                You are fired
                            </div>
                        </div>
                        <div className="text-xs text-[#5e5e5e]">
                            1m
                        </div>
                    </>
                </div>
            ))}
        </div>
    )
}