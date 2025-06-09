"use client";
import { useState } from "react";
import {
    Input,
    Button,
    Label,
    Card,
    CardContent,
    CardTitle,
    CardDescription,
    CardHeader,
    CardFooter, Separator
} from "@/components/ui";
import Link from "next/link";

export function SignUpForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        callbackURL: "/dashboard",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        const result = await res.json();

        if (res.ok) {
            // Handle success (e.g. navigate or show confirmation)
        } else {
            alert(result.error);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Account Signup</CardTitle>
                <CardDescription>Create an account to start your first worldbuilding project.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="grid grid-rows-1 gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                    <Button type="submit" className="mt-4">Sign Up</Button>
                </form>
            </CardContent>
            <Separator className="mt-2"/>
            <CardFooter className="grid grid-rows-1 gap-2">
                <p>Forgot Password? <Link className="link" href="/auth/reset">Reset</Link></p>
                <p>Already have an account? <Link className="link" href="/auth/signup">Log in</Link></p>
            </CardFooter>
        </Card>
    );
}
