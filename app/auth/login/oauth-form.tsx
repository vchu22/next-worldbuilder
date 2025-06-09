import { redirect } from "next/navigation"
import Image from "next/image";
import { Button } from "@/components/ui"

import { signIn } from "@/lib/auth-client"

type OAuthFormProps = {
    signin_error_url: string
};

export default function OAuthForm({ signin_error_url }: OAuthFormProps) {
    return <div></div>
    // return Object.values(providerMap).map((provider) => (
    //     <form key={(provider.id)} className="grid grid-rows-[45px]"
    //         action={async () => {
    //             "use server"
    //             try {
    //                 await signIn(provider.id, {
    //                     redirectTo: "/dashboard",
    //                 })
    //             } catch (error) {
    //                 // Signin can fail for a number of reasons, such as the user
    //                 // not existing, or the user not having the correct role.
    //                 // In some cases, you may want to redirect to a custom error
    //                 if (error instanceof AuthError) {
    //                     return redirect(`${signin_error_url}?error=${error.type}`)
    //                 }
    //
    //                 // Otherwise if a redirects happens Next.js can handle it
    //                 // so you can just re-thrown the error and let Next.js handle it.
    //                 // Docs:
    //                 // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
    //                 throw error
    //             }
    //         }}
    //     >
    //         <Button type="submit">
    //             <Image
    //                 className="dark:invert"
    //                 src={`https://authjs.dev/img/providers/${provider.id}.svg`}
    //                 alt="Next.js logo"
    //                 width={20}
    //                 height={20}
    //                 priority
    //             />
    //             <span>Sign in with {provider.name}</span>
    //         </Button>
    //     </form>
    // ))

}