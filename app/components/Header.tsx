import React from 'react';
import Link from "next/link";
import Image from "next/image"
import Teams from "@/app/teams/page";

const Header = () => {
    return (
        <header>
            <div>
                {/*<img src="/public/logo-portrait.avif" alt=""/>*/}
                {/*<Image*/}
                {/*    src={"/public/logo-portrait.avif"}*/}
                {/*    width={800}*/}
                {/*    height={500}*/}
                {/*    alt="Picture of the author"*/}
                {/*/>*/}

            </div>
            <nav>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/teams"}>Teams</Link>
            </nav>
        </header>
    )
}

export default Header;