'use client';

import { signIn } from "next-auth/react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function HeroGetStarted() {
    return (
        <Button
            onClick={() => void signIn('github')}
            className={
                cn(
                    buttonVariants({ size: "lg" }),
                    "px-4",
                )}
        >
            Get Started
        </Button>
    )
}