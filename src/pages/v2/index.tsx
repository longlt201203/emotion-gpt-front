import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

export default function Page() {
    return (
        <div className="h-screen flex">
            <Sidebar/>
            <MainContent/>
        </div>
    );
}