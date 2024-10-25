import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Profile() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="https://placehold.co/400" width={40} className="rounded-full" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-start">
                        <p className="font-semibold">Profile Name</p>
                        <p className="text-xs">@longlt201203</p>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}