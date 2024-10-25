import { Button } from "@/components/ui/button";

export interface ChatHistoryItemProps {
    active?: boolean;
}

export default function ChatHistoryItem(props: ChatHistoryItemProps) {
    return (
        <Button className={`h-full px-2 justify-start break-all whitespace-pre-wrap max-w-[320px] ${props.active && "bg-secondary"}`} variant="ghost">
            <div className="text-start">
                <p className="text-base">Chat 1</p>
                <p className="font-normal">Chat content asjdhkjashd asdha kshdaksjdhaskjdhjkas asdjhasjkd</p>
            </div>
        </Button>
    );
}