import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";

export default function Apps() {
    return (
        <div className="flex flex-col gap-y-6">
            <section className="flex flex-col gap-y-4 max-w-lg">
                <h1 className="text-xl">Apps</h1>
            </section>
            <section>
                <Card className="w-[350px] hover:cursor-pointer hover:border-foreground ">
                    <CardHeader>
                        <CardTitle>Install App</CardTitle>
                        <CardDescription>Get started with your first app</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center">
                            <PlusIcon className="w-12 h-12 text-primary" />
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}