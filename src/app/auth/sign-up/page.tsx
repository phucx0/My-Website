"use client"
import Link from "next/link"
import { useState } from "react"

export default function SignUpPage(){
    const [date, setDate] = useState(1)
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(2025)
    return(
        <div className="h-screen flex items-center justify-center overflow-hidden">
            <div className="flex flex-col gap-6 w-[300px] items-center justify-center">
                <div className="text-[36px] font-bold ">
                    Sign Up
                </div>
                <div className="w-full flex flex-col gap-[16px] items-center justify-center">
                    <div className="w-full border-[2px] border-[#2b2b2b] rounded-[16px] flex flex-col items-center justify-center">
                        <input className="placeholder-[#5e5e5e] w-full outline-none bg-transparent rounded-[16px] text-[#ffffff] text-[16px] p-2" type="text" placeholder="Username"/>
                    </div>
                    <div className="w-full border-[2px] border-[#2b2b2b] rounded-[16px] flex flex-col items-center justify-center">
                        <input className="placeholder-[#5e5e5e] w-full outline-none bg-transparent rounded-[16px] text-[#ffffff] text-[16px] p-2" type="text" placeholder="Email"/>
                    </div>
                    <div className="w-full border-[2px] border-[#2b2b2b] rounded-[16px] flex flex-col items-center justify-center">
                        <input className="placeholder-[#5e5e5e] w-full outline-none bg-transparent rounded-[16px] text-[#ffffff] text-[16px] p-2" type="text" placeholder="Password"/>
                    </div>
                    <div className="flex w-full items-center justify-between gap-2">
                        <input 
                            className="w-[90px] p-2 border-b-[2px] border-[#2b2b2b] hover:border-[#5e5e5e] bg-transparent outline-none" 
                            type="text" 
                            placeholder="DD"
                            onChange={(e) => setDate(Number(e.target.value))}
                        />
                        <input 
                            className="w-[90px] p-2 border-b-[2px] border-[#2b2b2b] hover:border-[#5e5e5e]  bg-transparent outline-none" 
                            type="text" 
                            placeholder="MM"
                            onChange={(e) => setMonth(Number(e.target.value))}
                        />
                        <input 
                            className="w-[90px] p-2 border-b-[2px] border-[#2b2b2b] hover:border-[#5e5e5e]  bg-transparent outline-none" 
                            type="text" 
                            placeholder="YYYY"
                            onChange={(e) => setYear(Number(e.target.value))}
                        />
                    </div>

                </div>
                <div className="w-full text-center font-bold cursor-pointer p-2 rounded-[16px] bg-[#2b2b2b] hover:bg-[#3b3b3b]">
                    Confirm
                </div>
                <Link href='/auth/sign-in' className="text-[#5e5e5e] text-xs cursor-pointer hover:text-[#6e6e6e]">
                    I have a account
                </Link>
            </div>
        </div>
    )
}