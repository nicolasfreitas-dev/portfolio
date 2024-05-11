import "./header.css";

export function Header() {
    return (
        <header className="bg-primaryColor text-base">
            <nav className="flex flex-row justify-between items-center w-full h-16 px-4 py-5 font-bold" id="navbar">
                <div className="ml-5">
                    <img
                    src=""
                    alt="logo"
                    className=""
                    />
                </div>
                <div className="flex flex-row justify-between gap-5 mr-5">
                    <ul className="flex flex-row justify-between gap-5">
                        <a
                        className="hover:text-detailColorOne"
                        href="#Home"
                        target="_self">
                            <li>Página Inicial</li>
                        </a>
                        <a
                        className="hover:text-detailColorOne"
                        href="#Sobre"
                        target="_self">
                            <li>Sobre</li>
                        </a>
                        <a
                        className="hover:text-detailColorOne"
                        href="#Tecnologias"
                        target="_self">
                            <li>Tecnologias</li>
                        </a>
                        <a
                        className="hover:text-detailColorOne"
                        href="#Projetos"
                        target="_self">
                            <li>Projetos</li>
                        </a>
                        <a
                        className="hover:text-detailColorOne"
                        href=""
                        target="_self">
                            <li>Contato</li>
                        </a>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
