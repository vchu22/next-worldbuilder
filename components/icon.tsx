"use client"
import Image from "next/image";
import React from "react";

export const iconLinks : { [key: string]: string } = {
    "LightMode" : "https://api.iconify.design/material-symbols:light-mode-rounded.svg",
    "DarkMode": "https://api.iconify.design/material-symbols:moon-stars-rounded.svg",
}

export default function Icon({name, width = 20, height = 20, invertColor = false}:
        {name: string, width?: number, height?: number, invertColor?: boolean}) {
    return (
        <Image src={iconLinks[name]} alt="Icon" width={width} height={height}
               className={invertColor? "dark:invert invert-0": "invert dark:invert-0"} />
    );
}