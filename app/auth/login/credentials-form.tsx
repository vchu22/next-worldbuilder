import { AuthError } from "next-auth"
import { redirect } from "next/navigation"
import { Button, Input, Label } from "@/components/ui"
import { signIn } from "@/lib/auth.ts";

const CredentialsForm = ({ signin_error_url }: { signin_error_url: String }) => {
    return (
        <form
            action={async (formData) => {
                "use server"
                try {
                    await signIn("credentials", formData)
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
                <input name="password" id="password" />
            </Label>
            <Input type="password" placeholder="Password" id="password"></Input>

            <Button type="submit">Sign In</Button>
        </form>
    )
}

export default CredentialsForm;