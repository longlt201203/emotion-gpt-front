import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

export default function MainContent() {
    return (
        <div className="flex-grow flex flex-col gap-2">
            <MessageList/>
            <MessageInput/>
        </div>
    );
}