import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui"
import CredentialsForm from './credentials-form';
import OAuthForm from "./oauth-form";

const SIGNIN_ERROR_URL = "/error"

export default async function SignInPage(props: {
    searchParams: { callbackUrl: string | undefined }
}) {
    return (
        <div className="flex flex-col gap-2">
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <CredentialsForm searchParams={props.searchParams} signin_error_url={SIGNIN_ERROR_URL} />
                    <Separator className="my-4" />
                    <OAuthForm searchParams={props.searchParams} signin_error_url={SIGNIN_ERROR_URL} />
                </CardContent>
                <CardFooter>
                    <p>Forgot Password?</p>
                    <p>Don't have an account? <a href="">Sign up</a></p>
                </CardFooter>
            </Card>
        </div>
    )
}