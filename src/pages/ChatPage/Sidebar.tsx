import { Separator } from "@/components/ui/separator";
import Profile from "./Profile";
import ChatHistory from "./ChatHistory";

export default function Sidebar() {
    return (
        <div className="border-r p-4 flex flex-col gap-4">
            <Profile/>
            <Separator/>
            <ChatHistory/>
        </div>
    );
}