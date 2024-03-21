'use client'
import React, { useState } from 'react'
import Image from "next/image";

import menuButton from "@/Components/assets/images/icon-menu.svg";
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import { IoMdMenu } from "react-icons/io";

export default function Header() {

    const [menu, setMenu] = useState(false);

    return (
        <div className="flex justify-between items-center" style={{ width: "100%" }}>

            <p className="text-4xl">SETH</p>
            <IoMdMenu className="flex sm:hidden" onClick={() => setMenu(true)} />

            <div className="sm:flex hidden ">
                <Navbar />
            </div>
            <MobileMenu menu={menu} setMenu={setMenu} />
        </div>
    )
}