import devburguer from "../../assets/devburguer.jpeg";
import audionotes from "../../assets/audionotes.png";
import audiobook from "../../assets/audiobook.png";
import devmed from "../../assets/devmed.png";
import typescript from "../../assets/typescript-icon-svgrepo-com.svg";
import react from "../../assets/react-svgrepo-com.svg";
import html from "../../assets/html-5-svgrepo-com.svg";
import css from "../../assets/css-3-svgrepo-com.svg";
import tailwindcss from "../../assets/tailwind-svgrepo-com.svg";
import javascript from "../../assets/js-svgrepo-com.svg";

const projetos = [
    {
        id: 1,
        image: devburguer,
        title: "Cardápio Digital",
        description: "Página de cardápio digital para realização de pedidos de uma hamburgueria fictícia. Com funcionalidade de de adição e remoção de itens do carrinho, pedidos no Whatsapp e detecção do horário de funcionamento do estabelecimendo.",
        stacks: [html, css, javascript, tailwindcss],
        deploy: "https://cardapio-digital-nine.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/cardapio-digital"
    },
    {
        id: 2,
        image: audionotes,
        title: "Audio Notes",
        description: "Aplicativo de conversão automática de notas de áudio em texto. Conta ainda, com funcionalidades de anotações por texto, criação ou exclusão de notas e filtragem das notas pela barra de pesquisa.",
        stacks: [react, tailwindcss, typescript],
        deploy: "https://audio-notes.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/audio-notes-app"
    },
    {
        id: 3,
        image: audiobook,
        title: "Audiobook",
        description: "Aplicativo de audio tradução para reprodução de livros.",
        stacks: [html, css, javascript, tailwindcss],
        deploy: "https://audiobook-app-eta.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/audiobook-app"
    },
    {
        id: 4,
        image: devmed,
        title: "DevMed",
        description: "Página de gerenciamento de consultas médicas.",
        stacks: [html, css, javascript],
        deploy: "",
        github: ""
    }
]

export default projetos;