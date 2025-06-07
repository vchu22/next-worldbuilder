import { signOut, auth } from "@/lib/auth"
import {Button} from "@/components/ui";

const PageHeader = async () => {
    const session = await auth();

    return (
        <header className="">
            <h1 className="audiowide-regular">Next WorldBuilder</h1>
            {session? <form
                action={async () => {
                    "use server"
                    await signOut({ redirectTo: "/auth/logout"})
                }}
            >
                <Button type="submit">Sign Out</Button>
            </form> : ""}
        </header>
    )
}

export default PageHeader;