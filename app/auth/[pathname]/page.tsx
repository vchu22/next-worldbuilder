import { authViewPaths } from "@daveyplate/better-auth-ui/server"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { AuthView } from "./view"

export function generateStaticParams() {
    return Object.values(authViewPaths).map((pathname) => ({ pathname }))
}

export default async function AuthPage({ params }: { params: Promise<{ pathname: string }> }) {
    const { pathname } = await params
    const sessionData = await auth.api.getSession({ headers: await headers() })

    if (pathname === "settings") {
        if (!sessionData) redirect("/auth/sign-in?redirectTo=/auth/settings")
    }
    else if (pathname === "sign-in") {
        if (sessionData) redirect("/dashboard")
    }

    return <AuthView pathname={pathname} />
}