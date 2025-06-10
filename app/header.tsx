import { SignedIn } from "@daveyplate/better-auth-ui";
import SignOutButton from "@/components/signout-button";

const PageHeader = () => {
    return (
        <header className="">
            <h1 className="audiowide-regular">Next WorldBuilder</h1>
            <SignedIn>
                <SignOutButton/>
            </SignedIn>
        </header>
    )
}

export default PageHeader;