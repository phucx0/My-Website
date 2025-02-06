"use client"
import { createContext, useState, useContext } from "react";

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

interface FriendProps {
    Friend: Friend | null; // Bạn bè được chọn hoặc null
    setFriend: (data: Friend | null) => void; // Hàm để chọn bạn bè
}
  
const ChatContext = createContext<FriendProps | undefined>(undefined);

export function ChatProvider({ children } : { children: React.ReactNode }) {
  const [Friend, setFriend] = useState<Friend | null>(null);

  return (
    <ChatContext.Provider value={{ Friend, setFriend }}>
        {children}
    </ChatContext.Provider>

  );
}

export function useFriendInfo() {
    const context = useContext(ChatContext)
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}
