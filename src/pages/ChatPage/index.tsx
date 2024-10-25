import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

export default function ChatPage() {
    return (
        <div className="h-screen flex">
            <Sidebar/>
            <MainContent/>
        </div>
    );
}