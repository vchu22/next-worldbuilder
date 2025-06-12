import { SignedIn } from "@daveyplate/better-auth-ui";
import SignOutButton from "@/components/signout-button";
import { LangDropdownMenu } from "@/components/lang-menu";
import { DarkModeSwitchButton } from "@/components/dark-mode-switch";

const PageHeader = () => {
    return (
        <header className="flex flex-row items-center justify-between ml-5">
            <h1 className="audiowide-regular">Next WorldBuilder</h1>

            <div className="flex flex-row items-center justify-between gap-2">
                <DarkModeSwitchButton />
                <LangDropdownMenu/>
                <SignedIn>
                    <SignOutButton/>
                </SignedIn>
            </div>
        </header>
    )
}

export default PageHeader;