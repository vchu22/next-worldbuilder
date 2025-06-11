"use client"
import { SignedIn } from "@daveyplate/better-auth-ui";
import { useTheme } from 'next-themes'
import SignOutButton from "@/components/signout-button";
import { Button } from "@/components/ui";
import Icon from "@/components/icon"
import { LangDropdownMenu } from "@/components/lang-dropdown";

const PageHeader = () => {
    const { theme, setTheme } = useTheme()
    return (
        <header className="flex flex-row items-center justify-between ml-5">
            <h1 className="audiowide-regular">Next WorldBuilder</h1>
            <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <Icon name={theme === 'dark' ? "DarkMode" : "LightMode"} /> {theme === 'dark' ? "Dark" : "Light"}
            </Button>
            <LangDropdownMenu/>
            <SignedIn>
                <SignOutButton/>
            </SignedIn>
        </header>
    )
}

export default PageHeader;