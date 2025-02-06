"use client"
import { useState } from "react"

interface HoverInterface{
    title: string,
    content: string,
    children: React.ReactNode,
    direction: "top" | "bottom" | "left" | "right"
}
export const Tooltip = (info: HoverInterface) => {
    const [hover, setHover] = useState(false)
    const [pos, setPos] = useState('')
    function posX(){
        if(info.direction === 'top'){
            setPos('top-full')
        }
        else if(info.direction === 'bottom'){
            setPos('bottom-full')
        }
        else if(info.direction === 'right'){
            setPos('right-full')
        }
        else{
            setPos('left-full')
        }
    }

    return(
        <div className="relative inline-block"
            onMouseOver={() => {
                setHover(true)
                posX()
            }}
            onMouseOut={() => setHover(false)}
        >
            {/* Tooltip */}
            <div className={` ${pos} max-w-[200px] text-xs absolute
                left-0 bottom-full bg-[#000000dc] backdrop-blur-[2px] 
                rounded-[8px] border-[1px] border-[#000000] p-1  
                ${hover ? 'block' : 'hidden'}
            `}>
                <div className="font-bold">{info.title}</div>
                <div className="">{info.content}</div>
            </div>

            {/* Children */}
            {info.children}
        </div>
    )
}