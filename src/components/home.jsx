export function Home () {
    return (
        <section className="w-full h-screen bg-primaryColor">
            <div className="h-full flex flex-col justify-center items-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-detailColorOne">Nicolas Freitas</h1>
                    <h2 className="text-6xl font-bold">
                        Desenvolvedor <span className="text-detailColorOne">Front</span>-End
                    </h2>
                    <p className="text-base text-detailColorTwo">
                        Desenvolvendo aplicações Front-End escaláveis com grande experiência
                        de usuário.
                    </p>
                </div>
                <div>
                    <a
                        href="./../assets/CV - Nicolas Freitas.pdf"
                        download="CV - Nicolas Freitas.pdf"
                    >
                        Download CV
                    </a>
                    <button>
                        <a
                            href="https://github.com/nicolasfreitas-dev"
                            rel="external"
                            target="_blank"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </button>
                    <button>
                        <a
                            href="https://www.linkedin.com/in/nicolasfreitas-dev/"
                            rel="external"
                            target="_blank"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </button>
                    <button>
                        <a
                            href="https://www.instagram.com/nicolasfreitas__/"
                            rel="external"
                            target="_blank"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
}
