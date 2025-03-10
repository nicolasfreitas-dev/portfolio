import curriculo from "../../assets/cv-nicolas-freitas.pdf";

export function Home () {
    return (
        <section className="w-full h-screen bg-primaryColor">
            <div className="md:h-full md:flex flex-col justify-center items-center xs:pt-5">
                <div className="flex flex-col justify-center items-center md:gap-5 text-center">
                    <div className="w-fit text-center">
                        <h1 className="xs:text-4xl md:text-6xl font-bold text-detailColorOne animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2">Nicolas Freitas</h1>
                    </div>
                    <h2 className="xs:text-4xl md:text-6xl font-bold" data-aos="fade-right" data-aos-duration="3000">
                        Desenvolvedor <span className="text-detailColorOne">Full</span>stack
                    </h2>
                    <p className="text-base text-detailColorTwo" data-aos="fade-right" data-aos-duration="3000">
                        Desenvolvendo aplicações escaláveis de qualidade.
                    </p>
                </div>
                <div className="xs:w-72 md:w-full h-20 md:flex md:items-center md:justify-center md:gap-8 xs:flex xs:items-center xs:justify-center xs:flex-wrap xs:mx-auto xs:gap-4 xs:mt-5" data-aos="zoom-in" data-aos-duration="3000">
                    <button 
                    className="w-32 h-10 bg-detailColorOne rounded-3xl flex justify-center items-center cursor-pointer hover:scale-110
                    hover:bg-detailColorOneHover transition duration-200 ease-in"
                    >
                        <a
                            href={curriculo}
                            download="CV - Nicolas Freitas"
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
                    <button className="size-12 rounded-[100%] bg-detailColorOne hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in">
                        <a
                            href="mailto:nicolasfpdev@gmail.com"
                            rel="external"
                            target="_blank"
                            className="flex items-center justify-center"
                        >
                            <i className="fa-solid fa-envelope text-[30px] text-secondaryColor"></i>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
}
