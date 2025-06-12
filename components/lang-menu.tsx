"use client"
import {useEffect, useState} from "react"
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"

const langLabels : { [key: string]: string } = {
    "en": "English",
    "zh-tw": "中文繁體",
}

export function LangDropdownMenu() {
    const t = useTranslations("component.langMenu");
    const [locale, setLocale] = useState("en")
    const changeLocale = (newLocale: string) => {
        setLocale(newLocale);
        document.cookie = `NEXT_WORLDBUILDER_LOCALE=${newLocale};`;
        router.refresh();
    }
    const router = useRouter()
    useEffect(() => {
        const cookieLocale = document.cookie.split(";")
            .find((row) => row.startsWith("NEXT_WORLDBUILDER_LOCALE="))
            ?.split("=")[1];
        if (cookieLocale) {
            setLocale(cookieLocale);
        } else {
            console.log("Language", navigator.language);
            const browserLocale = navigator.language.toLowerCase();
            changeLocale(browserLocale);
        }
    }, [router])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="font-bold">{langLabels[locale]}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={locale} onValueChange={changeLocale}>
                    {Object.keys(langLabels).map(lang =>
                        <DropdownMenuRadioItem key={lang} value={lang}>
                            {langLabels[lang]}
                        </DropdownMenuRadioItem>
                    )}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}