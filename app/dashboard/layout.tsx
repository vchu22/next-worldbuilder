import {headers} from "next/headers";
import {redirect} from "next/navigation";
import {auth} from "@/lib/auth";
import PageHeader from "@/app/header";
import PageFooter from "@/app/footer";

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const sessionData = await auth.api.getSession({ headers: await headers() })
    if (!sessionData) redirect("/auth/sign-in?redirectTo=/dashboard");

    return (
        <>
            <PageHeader/>
            <main className="m-auto block">
                {children}
            </main>
            <PageFooter/>
        </>
    )
}