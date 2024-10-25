import { ScrollArea } from "@/components/ui/scroll-area";
import MessageListItem from "./MessageListItem";

const text = "Hello\nweopfjweiofgo wefj owej iowejf iowjeof jweojfio wejiofjweojfowejfo wjeofjwoejfiowejfowe wefjwoejfoijewfioe"
const images = ["https://placehold.co/400", "https://placehold.co/200"]

export default function MessageList() {
    return (
        <ScrollArea className="flex-grow">
            <div className="flex flex-col p-4 gap-6">
                {Array.from({ length: 15 }, (_, index) => (<MessageListItem key={index} role={index % 2 == 0 ? "bot" : "user"} text={text} images={images} />))}
            </div>
        </ScrollArea>
    );
}