import devburguer from "../../assets/devburguer.jpeg";
import audionotes from "../../assets/audionotes.png";
import audiobook from "../../assets/audiobook.png";
import devmed from "../../assets/devmed.png";

const projetos = [
    {
        id: 1,
        image: devburguer,
        title: "Cardápio Digital",
        description: "Página de cardápio digital para realização de pedidos de uma hamburgueria fictícia.",
        stacks: ["HTML", "CSS", "Javascript", "Tailwindcss"],
        deploy: "https://cardapio-digital-nine.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/cardapio-digital"
    },
    {
        id: 2,
        image: audionotes,
        title: "Audio Notes",
        description: "Aplicativo que converte automaticamente notas de áudio em texto.",
        stacks: ["React", "Typescript", "Tailwindcss"],
        deploy: "https://audio-notes.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/audio-notes-app"
    },
    {
        id: 3,
        image: audiobook,
        title: "Audiobook",
        description: "Aplicativo de audiobook para reprodução de livros.",
        stacks: ["HTML", "CSS", "Javascript", "Tailwindcss"],
        deploy: "https://audiobook-app-eta.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/audiobook-app"
    },
    {
        id: 4,
        image: devmed,
        title: "DevMed",
        description: "Página de gerenciamento de consultas médicas.",
        stacks: ["HTML", "CSS", "Javascript"],
        deploy: "",
        github: ""
    },
    {
        id: 5,
        image: "",
        title: "",
        description: "",
        stacks: ["HTML", "CSS", "Javascript", "Tailwindcss"],
        deploy: "",
        github: ""
    },
    {
        id: 6,
        image: "",
        title: "",
        description: "",
        stacks: ["HTML", "CSS", "Javascript", "Tailwindcss"],
        deploy: "",
        github: ""
    },
]

export default projetos;