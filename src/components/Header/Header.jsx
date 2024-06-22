import { useState } from "react";
import "./header.css";
import logoBranca from "./../../assets/logo-branca.png";

export function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuOpened = () => {
        setOpenMenu(true);

        window.document.getElementById("menu-modal").style.display = "flex"
    };

    const handleMenuClosed = () => {
        setOpenMenu(false);

        window.document.getElementById("menu-modal").style.display = "none"
    };

    return (
        <header className="bg-primaryColor text-base" id="Header">
            <nav
                className="flex flex-row justify-between items-center w-full h-16 px-4 py-5 font-bold"
                id="navbar"
            >
                <div className="ml-5">
                    <a href="#Header"><img src={logoBranca} alt="logo" className="size-14 cursor-pointer" /></a>
                </div>
                <div className="md:flex flex-row justify-between gap-5 mr-5 xs:hidden">
                    <ul className="flex flex-row justify-between gap-5">
                        <a
                            className="hover:text-detailColorOne"
                            href="#Header"
                            target="_self"
                        >
                            <li>Página Inicial</li>
                        </a>
                        <a
                            className="hover:text-detailColorOne"
                            href="#Sobre"
                            target="_self"
                        >
                            <li>Sobre</li>
                        </a>
                        <a
                            className="hover:text-detailColorOne"
                            href="#Skills"
                            target="_self"
                        >
                            <li>Habilidades</li>
                        </a>
                        <a
                            className="hover:text-detailColorOne"
                            href="#Projetos"
                            target="_self"
                        >
                            <li>Projetos</li>
                        </a>
                    </ul>
                </div>
                <div className="md:hidden xs:block xs:mr-5">
                    <i className="fa-solid fa-bars hover:text-[#3b0764] cursor-pointer" id="header-menu" onClick={handleMenuOpened}></i>
                </div>
                <div className="flex flex-col items-center justify-start w-full h-screen bg-modalBgColor/90 absolute top-0 left-0 text-2xl z-50 hidden" id="menu-modal">
                    <div className="relative md:left-52 md:top-3 xs:left-32 xs:top-3 xs:block" id="close-menu">
                        <i className="fa-solid fa-xmark hover:text-detailColorOneHover cursor-pointer" onClick={handleMenuClosed}></i>
                    </div>
                    <ul className="flex flex-col justify-between gap-10 mt-32">
                        <a
                            href="#Home"
                            target="_self"
                            onClick={handleMenuClosed}
                        >
                            <li>Página Inicial</li>
                        </a>
                        <a
                            href="#Sobre"
                            target="_self"
                            onClick={handleMenuClosed}
                        >
                            <li>Sobre</li>
                        </a>
                        <a
                            href="#Skills"
                            target="_self"
                            onClick={handleMenuClosed}
                        >
                            <li>Habilidades</li>
                        </a>
                        <a
                            href="#Projetos"
                            target="_self"
                            onClick={handleMenuClosed}
                        >
                            <li>Projetos</li>
                        </a>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
