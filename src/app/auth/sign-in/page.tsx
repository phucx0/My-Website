"use client"
import Link from "next/link"
import { useEffect, useState} from "react"
import { useRouter } from "next/navigation"

export default function SignInPage(){
    const route = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleConfirm = () => {
        if (username === 'admin' && password === '123') {
            route.push('/home')
        }
        else{
            alert("Wrong")
        }
    }
    return(
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col gap-6 w-[300px] items-center justify-center">
                <div className="text-[36px] font-bold ">
                    Sign In
                </div>
                <div className="w-full flex flex-col gap-[16px] items-center justify-center">
                    <div className="w-full border-[2px] border-[#2b2b2b] rounded-[16px] flex flex-col items-center justify-center">
                        <input 
                            className="placeholder-[#5e5e5e] w-full outline-none bg-transparent rounded-[16px] text-[#ffffff] text-[16px] p-2" 
                            type="text" 
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="w-full border-[2px] border-[#2b2b2b] rounded-[16px] flex flex-col items-center justify-center">
                        <input 
                            className="placeholder-[#5e5e5e] w-full outline-none bg-transparent rounded-[16px] text-[#ffffff] text-[16px] p-2" 
                            type="text"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div 
                    className="w-full text-center font-bold cursor-pointer p-2 rounded-[16px] bg-[#2b2b2b] hover:bg-[#3b3b3b]"
                    onClick={handleConfirm}
                >
                    Confirm
                </div>
                <div className="text-[#5e5e5e] text-xs cursor-pointer hover:text-[#6e6e6e]">
                    Forgot Password?
                </div>
                <Link href='/auth/sign-up' className="text-[#5e5e5e] text-xs cursor-pointer hover:text-[#6e6e6e]">
                    Create a new Account
                </Link>
            </div>
        </div>
    )
}
