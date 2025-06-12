"use client";
import {useTheme} from "next-themes";
import Icon from "@/components/icon";
import {Button} from "@/components/ui";

export const DarkModeSwitchButton = () => {
    const { theme, setTheme } = useTheme()

    return (
        <Button variant="outline" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Icon name={theme === 'dark' ? "DarkMode" : "LightMode"} invertColor={true}/> {theme === 'dark' ? "Dark" : "Light"}
        </Button>
    )
}