"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Label } from "@/components/ui"

const CredentialsForm = ({ signin_error_url }: { signin_error_url: string }) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        callbackURL: "/dashboard", // Adjust as needed
    });

    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/auth/signin", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        const result = await res.json();

        if (res.ok) {
            router.push(formData.callbackURL);
        } else {
            setError(result.error || "Something went wrong.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-rows-1 gap-2">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Label htmlFor="email" className="block">
                Email
            </Label>
            <Input
                type="email" name="email"
                value={formData.email} onChange={handleChange}
                placeholder="Email" required
            />
            <Label htmlFor="password" className="block">
                Password
            </Label>
            <Input
                type="password" name="password"
                value={formData.password} onChange={handleChange}
                placeholder="Password" required
            />
            <Button className="mt-2" type="submit">Sign In</Button>
        </form>
    )
}

export default CredentialsForm;