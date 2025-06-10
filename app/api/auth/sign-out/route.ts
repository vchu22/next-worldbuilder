import { cookies } from "next/headers";
// import {signOut} from "@/lib/auth-client";

export async function POST() {
    // try {
    //     const { data, error } = await signOut();
    //
    //     if (error) {
    //         return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    //     }
    //
    //     // Clear the auth cookies manually
    //     const cookieStore = await cookies();
    //     cookieStore.set("better-auth-session", "", {path: "/", maxAge: 0});
    //
    //     return new Response(JSON.stringify({ data }), { status: 200 });
    // } catch (err) {
    //     // @ts-expect-error
    //     return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    // }

    const cookieStore = await cookies();
    cookieStore.set("better-auth-session", "", {path: "/", maxAge: 0});
    return new Response(null, { status: 200 });
}