import { Icons } from "@/app/constants"
import Image from "next/image"
export const ActionButton = () => {
    return(
        <div className="bg-[#2b2b2b] cursor-pointer w-[50px] h-[50px] rounded-[8px] flex items-center justify-center">
            <Image className="w-[20px] h-[20px]" src={Icons.Linked} alt="linked" />
        </div>
    )
}