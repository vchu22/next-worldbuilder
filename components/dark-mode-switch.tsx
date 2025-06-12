"use client";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import Icon from "@/components/icon";
import { Button } from "@/components/ui";

export const DarkModeSwitchButton = () => {
    const { theme, setTheme } = useTheme()
    const t = useTranslations("component.darkModeSwitch");

    return (
        <Button variant="outline" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Icon name={theme === 'dark' ? "DarkMode" : "LightMode"} invertColor={true}/>
                {theme === 'dark' ? t("dark") : t("light")}
        </Button>
    )
}