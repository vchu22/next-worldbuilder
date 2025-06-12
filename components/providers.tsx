"use client"
import { AuthUIProvider } from "@daveyplate/better-auth-ui"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"
import { authClient } from "@/lib/auth-client"
import {enabledOAuthProviders} from "@/lib/oauth-providers";
import {useTranslations} from "next-intl";

export function Providers({ children }: { children: ReactNode }) {
    const router = useRouter()
    const tSignUp = useTranslations("auth.signUpForm");
    const tSignIn = useTranslations("auth.signInForm");
    const tForgotPass = useTranslations("auth.forgotPasswordForm");
    return (
        <AuthUIProvider
            authClient={authClient}
            navigate={router.push}
            replace={router.replace}
            onSessionChange={() => {
                // Clear router cache (protected routes)
                router.refresh()
            }}
            providers={enabledOAuthProviders}
            Link={Link}
            localization={{
                signUp: tSignUp('signUp'),
                signUpDescription: tSignUp('signUpDescription'),
                name: tSignUp('name'),
                namePlaceholder: "John Doe",
                signUpAction: tSignUp('signUpAction'),
                alreadyHaveAnAccount: tSignUp('alreadyHaveAnAccount'),

                signIn: tSignIn('signIn'),
                signInDescription: tSignIn('signInDescription'),
                email: tSignIn('email'),
                emailPlaceholder: "jdoe@example.com",
                password: tSignIn('password'),
                passwordPlaceholder: "********",
                forgotPasswordLink: tSignIn('forgotPasswordLink'),
                signInAction: tSignIn('signInAction'),
                orContinueWith: tSignIn('orContinueWith'),
                signInWith: tSignIn('signInWith'),
                dontHaveAnAccount: tSignIn('dontHaveAnAccount'),

                forgotPassword: tForgotPass('forgotPassword'),
                forgotPasswordDescription: tForgotPass('forgotPasswordDescription'),
                forgotPasswordAction: tForgotPass('forgotPasswordAction'),
                goBack: tForgotPass('goBack')
            }}
        >
            {children}
        </AuthUIProvider>
    )
}