import { signIn } from "@/lib/auth-client";

export async function POST(req: Request) {
    const { email, password, callbackURL } = await req.json();

    try {
        const { data, error } = await signIn.email(
            {
                email,
                password,
                callbackURL, // Optional: where to go after login
            },
            {
                onRequest: () => {},
                onSuccess: () => {},
                onError: (ctx) => {
                    console.error(ctx.error.message);
                },
            }
        );

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 400 });
        }

        return new Response(JSON.stringify({ data }), { status: 200 });
    } catch (err) {
        // @ts-expect-error
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
