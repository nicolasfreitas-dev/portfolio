export function Home () {
    return (
        <section className="w-full h-screen bg-primaryColor" id="Home">
            <div className="md:h-full md:flex flex-col justify-center items-center xs:pt-5">
                <div className="md:flex md:flex-col md:gap-5 text-center">
                    <h1 className="xs:text-4xl md:text-[4rem] font-bold text-detailColorOne">Nicolas Freitas</h1>
                    <h2 className="xs:text-4xl md:text-[4rem] font-bold">
                        Desenvolvedor <span className="text-detailColorOne">Front</span>-End
                    </h2>
                    <p className="text-base text-detailColorTwo">
                        Desenvolvendo aplicações Front-End escaláveis com grande experiência
                        de usuário.
                    </p>
                </div>
                <div className="xs:w-80 md:w-96 h-20 md:flex md:items-center md:justify-center md:gap-8 xs:flex xs:items-center xs:justify-center xs:mx-auto xs:gap-4 xs:mt-5">
                    <button 
                    className="w-32 h-10 bg-detailColorOne rounded-3xl flex justify-center items-center cursor-pointer hover:scale-110
                    hover:bg-detailColorOneHover transition duration-200 ease-in"
                    >
                        <a
                            href="./../assets/CV - Nicolas Freitas.pdf"
                            download="CV - Nicolas Freitas.pdf"
                            className="font-bold text-base text-secondaryColor"
                        >
                            Download CV
                        </a>
                    </button>
                    <button className="size-12 rounded-[100%] bg-detailColorOne hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in">
                        <a
                            href="https://github.com/nicolasfreitas-dev"
                            rel="external"
                            target="_blank"
                            className="flex items-center justify-center"
                        >
                            <i className="fa-brands fa-github text-[30px] text-secondaryColor"></i>
                        </a>
                    </button>
                    <button className="size-12 rounded-[100%] bg-detailColorOne hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in">
                        <a
                            href="https://www.linkedin.com/in/nicolasfreitas-dev/"
                            rel="external"
                            target="_blank"
                            className="flex items-center justify-center"
                        >
                            <i className="fa-brands fa-linkedin text-[30px] text-secondaryColor"></i>
                        </a>
                    </button>
                    <button className="size-12 rounded-[100%] bg-detailColorOne hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in">
                        <a
                            href="https://www.instagram.com/nicolasfreitas__/"
                            rel="external"
                            target="_blank"
                            className="flex items-center justify-center"
                        >
                            <i className="fa-brands fa-instagram text-[30px] text-secondaryColor"></i>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
}
