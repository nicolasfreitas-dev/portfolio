import profilePic from './../assets/perfil.jpg'

export function About() {
    return (
        <article>
            <div>
                <h2>
                    Sobre mim<span>.</span>
                </h2>
                <p>
                    Olá! Me chamo Nicolas Freitas, Cientista Ambiental de
                    formação e sempre trabalhei com organização, planejamento
                    estratégico e solução de problemas. Esse são alguns dos
                    diferenciais que levo para minha jornada como desenvolvedor,
                    além das minhas habilidades técnicas. Atualmente desenvolvo
                    sistemas com interfaces modernas, com foco em experiência de
                    usuário, performance, responsividade e SEO.
                </p>
            </div>
            <div className="">
                <img
                    src={profilePic}
                    alt="Foto de perfil"
                    className="w-60 h-60"
                />
            </div>
        </article>
    );
}