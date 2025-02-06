import { useState } from "react"
import "@/styles/css/HideButton.css"
interface HideButtonProps {
    onClick: () => void;

}

export const HideButton = ({ onClick }: HideButtonProps) => {
    const [active, setActive] = useState(false)
    
    return(
        <div className="relative flex items-center w-[20px] h-[20px] border-[2px] border-[#f0eeee] rounded-[4px] cursor-pointer"
            onClick={() => {
                setActive(!active);
                onClick();
            }}
        >
            <div className={`animation-hide absolute w-[2px] h-[10px] bg-[#f0eeee] ${active ? "active" : ""} rounded-sm`}>
            </div>
        </div>
    )
}