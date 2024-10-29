import { Separator } from "@/components/ui/separator";
import Profile from "./Profile";
import ChatHistory from "./ChatHistory";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <div className="border-r p-4 flex flex-col gap-4">
      <Profile />
      <Button>New Chat</Button>
      <Separator />
      <ChatHistory />
    </div>
  );
}
