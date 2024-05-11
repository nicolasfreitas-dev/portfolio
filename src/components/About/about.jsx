import profilePic from './../../assets/perfil.jpg';

export function About() {
    return (
        <article className="w-full h-screen bg-primaryColor flex items-center justify-evenly">
            <div className="w-1/3">
                <h2 className='text-4xl font-bold mb-5'>
                    Sobre mim<span className='text-detailColorOne'>.</span>
                </h2>
                <p className='text-justify text-base leading-relaxed'>
                    Olá! Me chamo Nicolas Freitas, Cientista Ambiental de
                    formação e sempre trabalhei com organização, planejamento
                    estratégico e solução de problemas. Esse são alguns dos
                    diferenciais que levo para minha jornada como desenvolvedor,
                    além das minhas habilidades técnicas. Atualmente desenvolvo
                    sistemas com interfaces modernas, com foco em experiência de
                    usuário, performance, responsividade e SEO.
                </p>
            </div>
            <div className="w-1/4">
                <div className='flex justify-center items-center w-80 h-80'>
                    <img
                        src={profilePic}
                        alt="Foto de perfil"
                        className="w-72 h-72 rounded-full"
                    />
                </div>
            </div>
        </article>
    );
}