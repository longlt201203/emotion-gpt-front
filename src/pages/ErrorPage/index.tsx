import { useEffect } from "react";

export interface ErrorPageProps {
    status?: number;
}

export default function ErrorPage(props: ErrorPageProps) {
    useEffect(() => {
        
    }, [])
        
    return (
        <div>
            Error
        </div>
    );
}