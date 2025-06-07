import { AuthError } from "next-auth"
import { redirect } from "next/navigation"
import { Button, Input, Label } from "@/components/ui"
import { signIn } from "@/lib/auth";

const CredentialsForm = ({ signin_error_url }: { signin_error_url: string }) => {
    return (
        <form
            action={async (formData) => {
                "use server"
                try {
                    await signIn("credentials", formData, {
                        redirectTo: "/dashboard",
                    })
                } catch (error) {
                    if (error instanceof AuthError) {
                        return redirect(`${signin_error_url}?error=${error.type}`)
                    }
                    throw error
                }
            }}
        >
            <Label htmlFor="email" className="block">
                Email
            </Label>
            <Input type="email" placeholder="Email" id="email"></Input>
            <Label htmlFor="password" className="block">
                Password
            </Label>
            <Input type="password" placeholder="Password" id="password"></Input>

            <Button type="submit">Sign In</Button>
        </form>
    )
}

export default CredentialsForm;