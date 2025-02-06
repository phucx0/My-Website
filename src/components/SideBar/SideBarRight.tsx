"use client"
import { useState } from "react"

export const SideBarRight = () => {
    const [active, setActive] = useState(false)

    return(
        <div className="w-[24px] h-[24px] border-[2px] border-[#ffffff]">
            <div></div>
        </div>
    )
}