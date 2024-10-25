import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ChatHistoryItem from "./ChatHistoryItem";

export default function ChatHistory() {
    return (
        <ScrollArea>
            <div className="flex flex-col gap-4">
                {Array.from({ length: 15 }, (_) => (<ChatHistoryItem/>))}
            </div>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
}