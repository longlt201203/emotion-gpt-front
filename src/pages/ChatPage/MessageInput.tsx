import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Send, Trash, Upload } from "lucide-react";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";

export default function MessageInput() {
    const [message, setMessage] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [images, setImages] = useState<File[]>([]);

    const handleFilesInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        const input = e.target;
        const files = input.files;
        if (files && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const file = files.item(i);
                if (!file) break;
                images.push(file);
                setImages([...images]);
            }
        }
    }

    const handleRemoveFile = (index: number) => {
        images.splice(index, 1);
        setImages([...images]);
    }

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [message]);

    return (
        <div className="p-4">
            <div className="flex flex-col gap-2">
                <Separator className="mb-1"/>
                <div className="flex gap-3">
                    {images.map((item, index) => (
                        <div key={index} className="relative">
                            <Button size="icon" variant="destructive" className="absolute -right-2 -top-2 p-0 w-6 h-6" onClick={() => handleRemoveFile(index)}><Trash className="w-3 h-3" /></Button>
                            <img src={URL.createObjectURL(item)} className="h-20 rounded" />
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 items-end">
                    <Textarea ref={textareaRef} rows={1} placeholder="Input message..." className="resize-none min-h-[40px] max-h-[120px]" onChange={(e) => setMessage(e.target.value)} />
                    <div className="flex gap-2">
                        <Button size="icon" variant="secondary" asChild>
                            <div className="flex">
                                <Label htmlFor="messageFiles" className="cursor-pointer"><Upload /></Label>
                                <Input className="hidden" id="messageFiles" type="file" multiple onChange={handleFilesInput} />
                            </div>
                        </Button>
                        <Button size="icon"><Send /></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}