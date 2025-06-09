import Link from "next/link";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Separator} from "@/components/ui"
import CredentialsForm from './credentials-form';
import OAuthForm from "./oauth-form";

const SIGNIN_ERROR_URL = "/error"

export default async function SignInPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Sign in with your email or social login to start your project.</CardDescription>
            </CardHeader>
            <CardContent>
                <CredentialsForm signin_error_url={SIGNIN_ERROR_URL}/>
                <Separator className="my-4"/>
                <OAuthForm signin_error_url={SIGNIN_ERROR_URL}/>
            </CardContent>
            <Separator className="mt-2"/>
            <CardFooter className="grid grid-rows-1 gap-2">
                <p>Forgot Password? <Link className="link" href="/auth/reset">Reset</Link></p>
                <p>Don&#39;t have an account? <Link className="link" href="/auth/signup">Sign up</Link></p>
            </CardFooter>
        </Card>
    )
}