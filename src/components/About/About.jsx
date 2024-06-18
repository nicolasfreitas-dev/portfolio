import profilePic from './../../assets/perfil.jpg';

export function About() {
    return (
        <article className="w-full h-screen bg-primaryColor xs:flex xs:flex-col md:flex md:flex-row items-center justify-evenly" id='Sobre'>
            <div className="md:w-1/3 xs:w-[90%]">
                <h2 className='xs:text-2xl md:text-4xl font-bold mb-5'>
                    Sobre mim<span className='text-detailColorOne'>.</span>
                </h2>
                <p className='text-justify text-base leading-relaxed xs:leading-loose xs:tracking-tighter'>
                    Olá! Me chamo Nicolas Freitas, Cientista Ambiental de
                    formação e sempre trabalhei com organização, planejamento
                    estratégico e solução de problemas. Esse são alguns dos
                    diferenciais que levo para minha jornada como desenvolvedor,
                    além das minhas habilidades técnicas. Atualmente desenvolvo
                    sistemas com interfaces modernas, com foco em experiência de
                    usuário, performance, responsividade e SEO.
                </p>
            </div>
            <div className="md:w-1/4 xs:hidden md:block">
                <div className='flex justify-center items-center xs:w-[270px] md:w-80 xs:h-[270px] md:h-80 border-2 rounded-full border-detailColorOne'>
                    <img
                        src={profilePic}
                        alt="Foto de perfil"
                        className="xs:w-60 md:w-72 xs:h-60 md:h-72 rounded-full"
                    />
                </div>
            </div>
        </article>
    );
}