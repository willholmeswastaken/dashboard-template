'use client'

import Link from "next/link"
import { signIn, signOut } from "next-auth/react"
import { usePathname, useRouter } from 'next/navigation'

import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button, buttonVariants } from "./ui/button"
import { type getCurrentUser } from "@/lib/session"
import { type UnwrapPromise } from "@/types/unwrap-promise"

export function MainNav({
    user
}: { user: UnwrapPromise<ReturnType<typeof getCurrentUser>> }) {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const pathname = usePathname();
    const isUserLoggedIn = user !== undefined;
    const navItems = isUserLoggedIn
        ? [
            {
                title: "Dashboard",
                href: "/dashboard",
            },
            {
                title: "Users",
                href: "/users",
            },
            {
                title: "Apps",
                href: "/apps",
            }
        ] : [];
    return (
        <>
            <nav
                className={cn("hidden md:flex justify-between w-full items-center")}
            >
                <div className="flex flex-row gap-6 md:gap-4">
                    <Link
                        href="/"
                        className="text-sm font-bold transition-colors hover:text-primary inline-flex items-center justify-center pr-2"
                    >
                        DashboardApp
                    </Link>
                    {
                        navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={cn("text-sm font-medium transition-colors hover:text-primary inline-flex items-center justify-center hover:bg-foreground/10 rounded-md px-2 py-1",
                                    pathname === item.href ? "bg-foreground/10" : "")}
                            >
                                {item.title}
                            </Link>
                        ))
                    }
                </div>
                {
                    user !== undefined ?
                        (
                            <Button
                                onClick={() => void signOut()}
                                className={cn(
                                    buttonVariants({ variant: "secondary", size: "sm" }),
                                    "px-4",
                                )}
                            >
                                Logout
                            </Button>
                        )
                        : (<Button
                            onClick={() => void signIn('github')}
                            className={
                                cn(
                                    buttonVariants({ variant: "secondary", size: "sm" }),
                                    "px-4",
                                )}
                        >
                            Login
                        </Button>)
                }

            </nav >
            <nav
                className={cn("flex md:hidden justify-between w-full gap-y-6")}
            >
                <Button
                    className={cn("text-sm font-bold transition-colors hover:text-primary inline-flex items-center justify-center z-100",
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "px-0",
                    )}
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                >
                    DashboardApp
                </Button>
                {
                    isMobileNavOpen && (
                        <div
                            className={cn(
                                "fixed inset-0 top-2 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 mt-12 pb-32 shadow-md animate-in fade-in md:hidden text-background"
                            )}
                        >
                            <div className="relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md">
                                <Link href="/" className="flex items-center space-x-2">
                                    <span className="font-bold">Journal</span>
                                </Link>
                                <div className="grid grid-flow-row auto-rows-max text-sm">
                                    {
                                        navItems.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className={cn(
                                                    "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline text-background"
                                                )}
                                            >
                                                {item.title}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </nav>
        </>
    )
}