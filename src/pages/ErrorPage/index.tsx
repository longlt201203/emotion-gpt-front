import { useEffect } from "react";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";

export interface ErrorPageProps {
    status?: number;
}

export default function ErrorPage(props: ErrorPageProps) {
    const params = useParams();
    
    useEffect(() => {
        console.log(props.status)
    }, [])
        
    return props.status == 404 ? <NotFound/> : (
        <div>
            Unknown Error
        </div>
    );
}