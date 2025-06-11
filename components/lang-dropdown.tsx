"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"

const langLabels : { [key: string]: { "icon": string, "name": string } } = {
    "en": {icon: "🇺🇸", name: "English"},
    "es": {icon: "🇪🇸", name: "Spanish"},
    "fr": {icon: "🇫🇷", name: "French"},
    "zh-cn": {icon: "🇨🇳", name: "Chinese (Simplified)"},
    "zh-tw": {icon: "🇹🇼", name: "Chinese (Traditional)"},
    "ja": {icon: "🇯🇵", name: "Japanese"},
    "ko": {icon: "🇰🇷", name: "Korean"},
}

export function LangDropdownMenu() {
    const [lang, setLang] = useState("en")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="font-bold">{`${langLabels[lang].icon}  ${lang.toUpperCase()}`}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
                    {Object.keys(langLabels).map(lang =>
                        <DropdownMenuRadioItem key={lang} value={lang}>
                            {`${langLabels[lang].icon} ${langLabels[lang].name}`}
                        </DropdownMenuRadioItem>
                    )}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}