import { ChatProvider } from "@/components/provider/ChatProvider";
import { SideBar } from "@/components/SideBar/SideBarLeft";
import { TabBar } from "@/components/TabBar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return(
        <div className="flex flex-row overflow-hidden">
            <div className="hidden md:block">
                <TabBar />
            </div>
            <ChatProvider>
                <div className="hidden sm:block">
                    <SideBar />
                </div>
                {children}
            </ChatProvider>
        </div>
    )
}