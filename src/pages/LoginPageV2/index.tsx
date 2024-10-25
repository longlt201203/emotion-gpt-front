import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function LoginPageV2() {
    return (
        <div className="min-h-screen bg-secondary flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Login to Emotional GPT</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="usernameInput">Username</Label>
                            <Input id="usernameInput" type="text" placeholder="Username" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="passwordInput">Password</Label>
                            <Input id="passwordInput" type="password" placeholder="Password" />
                        </div>
                        <Button className="w-full">Sign In</Button>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                    <Button asChild variant="link" className="p-0">
                        <Link to="">Forgot Password?</Link>
                    </Button>
                    <p>Don't have an account? <Button asChild variant="link" className="p-0"><Link to="">Sign Up</Link></Button></p>
                </CardFooter>
            </Card>
        </div>
    );
}