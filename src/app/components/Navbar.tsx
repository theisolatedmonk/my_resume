'use client'
import React from "react";

type Props = {};
const navItems = ["HOME", "SKILL", "PROJECTS", "CONTACT"];
export default function Navbar({ }: Props) {
    return (
        <div className="sm:flex-row flex flex-col text-black rounded-lg   gap-6   ">
            {navItems.map((item) => (
                <div key={item} className="flex   gap-2  flex-col text-left">
                    <p>{item}</p>

                </div>
            ))}
        </div>
    );
}