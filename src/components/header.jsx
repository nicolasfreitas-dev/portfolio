export function Header() {
    return (
        <header className="flex flex-row justify-between items-center h-16 bg-violet-950 text-white font-bold">
            <div className="ml-5">
                <img id="logotipo" src="" alt="LOGOTIPO" />
            </div>
            <nav className="flex flex-row justify-between gap-5 mr-5">
                <ul className="flex flex-row justify-between gap-5">
                    <a className="hover:text-violet-400" href="#Home" target="_self">
                        <li>Página Inicial</li>
                    </a>
                    <a className="hover:text-violet-400" href="#Sobre" target="_self">
                        <li>Sobre</li>
                    </a>
                    <a className="hover:text-violet-400" href="#Tecnologias" target="_self">
                        <li>Tecnologias</li>
                    </a>
                    <a className="hover:text-violet-400" href="#Projetos" target="_self">
                        <li>Projetos</li>
                    </a>
                    <a className="hover:text-violet-400" href="" target="_self">
                        <li>Contato</li>
                    </a>
                </ul>
                <div>
                    <input type="checkbox" />
                    <label>
                        <i className="fa-solid fa-sun"></i>
                        <i className="fa-solid fa-moon"></i>
                        <div className="ball"></div>
                    </label>
                </div>
            </nav>
        </header>
    );
}
