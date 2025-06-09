import { authClient } from "@/lib/auth-client";

export async function POST(req: Request) {
    const { email, password, name, image, callbackURL } = await req.json();

    try {
        const { data, error } = await authClient.signUp.email(
            {
                email,
                password,
                name,
                image,
                callbackURL,
            },
            {
                onRequest: () => {
                    // Show loading indicator
                },
                onSuccess: () => {
                    // Redirect to dashboard or sign-in page
                },
                onError: (ctx) => {
                    // Display error message
                    alert(ctx.error.message);
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
