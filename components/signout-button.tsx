"use client";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui";
import {signOut} from "@/lib/auth-client";

export default function SignOutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth/logout"); // redirect after sign-out
                },
            },
        });
    };

    return (
        <Button onClick={handleSignOut}>Sign Out</Button>
    );
}