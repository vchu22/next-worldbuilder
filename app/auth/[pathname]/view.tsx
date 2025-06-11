"use client"
import { AuthCard } from "@daveyplate/better-auth-ui";
import './style.css';

export function AuthView({ pathname }: { pathname: string }) {
    return (
        <main className="flex grow flex-col items-center justify-center gap-4 p-4">
            <AuthCard socialLayout="vertical" pathname={pathname} redirectTo="/dashboard"
                      className="auth-card" />
        </main>
    )
}