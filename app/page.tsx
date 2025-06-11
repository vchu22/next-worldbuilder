import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/app/header";
import PageFooter from "@/app/footer";
import {auth} from "@/lib/auth";

export default async function Home() {
    const sessionData = await auth.api.getSession({ headers: await headers() })
    if (sessionData) redirect("/dashboard")

    return (
        <>
            <PageHeader/>
            <div className="grid grid-rows-[20px_1fr_20px] justify-items-center p-8 sm:p-16 pb-16 gap-16">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full sm:w-md">
                    <p>A worldbuilding tool that allows fiction writers and video game designers to easily organize of
                        worldbuilding concepts and collaborate with others in real-time.</p>

                    <div className="flex gap-4 items-center flex-col sm:flex-row">
                        <Link className="themed-btn primary" href="/auth/sign-in/" rel="noopener noreferrer" >
                            <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark"
                                width={20} height={20} />
                            Login
                        </Link>
                        <Link className="themed-btn secondary" href="/guide/" rel="noopener noreferrer">
                            Documentation
                        </Link>
                    </div>
                </main>
            </div>
            <PageFooter/>
        </>
    );
}