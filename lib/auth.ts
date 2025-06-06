import NextAuth from "next-auth"
import { Apple, Google, GitHub, Discord, Auth0 } from "./authProviders";
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"

const providers: Provider[] = [
    Credentials({
        credentials: {
            email: {
                type: "email",
                label: "Email",
                placeholder: "test@example.com",
            },
            password: {
                type: "password",
                label: "Password",
                placeholder: "*****",
            },
        },
        authorize(c) {
            if (c.password !== "password") return null
            return {
                id: "test",
                name: "Test User",
                email: "test@example.com",
            }
        },
    }),
    Google,
    Apple,
    GitHub,
    Discord,
    Auth0
]

export const providerMap = providers
    .map((provider) => {
        if (typeof provider === "function") {
            const providerData = provider()
            return { id: providerData.id, name: providerData.name }
        } else {
            return { id: provider.id, name: provider.name }
        }
    })
    .filter((provider) => provider.id !== "credentials")

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers,
    pages: {
        signIn: "/auth/login",
    },
})