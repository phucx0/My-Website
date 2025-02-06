"use client"
import { useState } from 'react'
import '@/styles/css/AddFriend.css'

export const AddFriend = () => {
    const [active, setActive] = useState(false)

    function handleActice(check : boolean){
        setActive(check)
    }

    return(
        <div className="absolute bottom-0 w-full flex justify-end">
            <div className={`flex flex-col button-container ${active}`}>
                <div className={`circles ${active} cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center bg-dark-m`}>
                    1
                </div>
                <div className={`circles ${active} cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center bg-dark-m`}>
                    2
                </div>
                <div className={`circles ${active} cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center bg-dark-m`}>
                    3
                </div>
                <div className={`circles ${active} cursor-pointer w-[50px] h-[50px] rounded-full flex items-center justify-center bg-dark-m`}
                    onClick={() => {
                        handleActice(!active)
                    }}
                >
                    here
                </div>
            </div>
        </div>
    )
}