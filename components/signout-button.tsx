"use client";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui";

export default function SignOutButton() {
    const router = useRouter();

    return (
        <Button onClick={() => {
            router.push("/auth/sign-out");
        }}>Sign Out</Button>
    );
}