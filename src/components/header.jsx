export function Header() {
    return (
        <header className="flex flex-row justify-between items-center w-full h-16 font-bold bg-primaryColor">
            <div className="ml-5">
                <img
                id="logotipo"
                src=""
                alt="Logo"
                />
            </div>
            <nav className="flex flex-row justify-between gap-5 mr-5">
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
            </nav>
        </header>
    );
}
