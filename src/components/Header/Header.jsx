import { useState } from "react";
import "./header.css";

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
        <header className="bg-primaryColor text-base">
            <nav
                className="flex flex-row justify-between items-center w-full h-16 px-4 py-5 font-bold"
                id="navbar"
            >
                <div className="ml-5">
                    <img src="" alt="logo" className="" />
                </div>
                <div className="md:flex flex-row justify-between gap-5 mr-5 xs:hidden">
                    <ul className="flex flex-row justify-between gap-5">
                        <a
                            className="hover:text-detailColorOne"
                            href="#Home"
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
                        <a
                            className="hover:text-detailColorOne"
                            href="#Contato"
                            target="_self"
                        >
                            <li>Contato</li>
                        </a>
                    </ul>
                </div>
                {/* <div>
                    CHANGE THEME
                </div> */}
                <div className="md:hidden xs:block">
                    <i className="fa-solid fa-bars hover:text-[#3b0764] cursor-pointer" id="header-menu" onClick={handleMenuOpened}></i>
                </div>
                <div className="flex flex-col items-center justify-start w-full h-screen bg-modalBgColor/90 absolute top-0 left-0 text-2xl z-50 hidden" id="menu-modal">
                    <div className="relative left-52 top-3 xs:block" id="close-menu">
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
                        <a
                            href="#Contato"
                            target="_self"
                            onClick={handleMenuClosed}
                        >
                            <li>Contato</li>
                        </a>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
