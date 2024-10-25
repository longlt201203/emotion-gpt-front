import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { File, Send } from "lucide-react";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";

export default function MessageInput() {
    const [message, setMessage] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleFilesInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        const input = e.target;
        const files = input.files;
        if (files && files.length > 0) {

        }
    }

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [message]);

    return (
        <div className="p-4">
            <div className="flex gap-2 items-end">
                <Textarea ref={textareaRef} rows={1} placeholder="Input message..." className="resize-none min-h-[40px] max-h-[120px]" onChange={(e) => setMessage(e.target.value)} />
                <div className="flex gap-2">
                    <Button size="icon" variant="secondary" asChild>
                        <div className="flex">
                            <Label htmlFor="messageFiles"><File /></Label>
                            <Input className="hidden" id="messageFiles" type="file" onChange={handleFilesInput} />
                        </div>
                    </Button>
                    <Button size="icon"><Send /></Button>
                </div>
            </div>
        </div>
    );
}