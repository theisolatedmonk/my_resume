'use client'
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
// import menuClose from "@/Components/assets/images/icon-menu-close.svg";
import Navbar from "./Navbar";
// type Props = {};
import { IoMdClose } from "react-icons/io";

export default function MobileMenu({
    menu,
    setMenu,
}: {
    menu: boolean;
    setMenu: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <div className={`w-full h-screen max-h-screen bg-black  fixed bg-opacity-70  top-0 justify-end flex  sm:hidden z-50 overflow-hidden left-0  ${menu ? "flex" : "hidden"
            } `}>
            <div className="flex bg-white w-[60%] flex-col p-8 gap-10 ">
                <div className="flex justify-end ">
                    <IoMdClose onClick={() => setMenu(false)} />


                </div>
                <div className="flex">
                    <Navbar />
                </div>
            </div>
        </div>
    );
}