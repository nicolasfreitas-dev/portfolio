import typescript from "../../assets/typescript-icon-svgrepo-com.svg";
import react from "../../assets/react-svgrepo-com.svg";
import html from "../../assets/html-5-svgrepo-com.svg";
import css from "../../assets/css-3-svgrepo-com.svg";
import tailwindcss from "../../assets/tailwind-svgrepo-com.svg";
import javascript from "../../assets/js-svgrepo-com.svg";
import nextjs from "../../assets/nextjs.svg"

import wisebills from "../../assets/wisebills.png"
import dripstore from "../../assets/drip-store.png"

const projetos = [
    {
        id: 1,
        image: wisebills,
        title: "Wisebills",
        description:
            "Uma aplicação web, desenvolvida seguindo os princípios de mobile first, com o objetivo de facilitar a organização e o gerenciamento financeiro do usuário.",
        stacks: [nextjs, typescript, tailwindcss],
        deploy: "https://wisebills-coral.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/wisebills.git",
    },
    {
        id: 2,
        image: dripstore,
        title: "Drip Store",
        description: "E-commerce para venda de roupas e produtos esportivos.",
        stacks: [react, tailwindcss, typescript],
        deploy: "https://drip-store-frontend.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/drip-store-frontend.git",
    },
    {
        id: 3,
        image: "",
        title: "",
        description: "",
        stacks: [],
        deploy: "",
        github: "",
    },
    {
        id: 4,
        image: "",
        title: "",
        description: "",
        stacks: [],
        deploy: "",
        github: "",
    },
    {
        id: 5,
        image: "",
        title: "",
        description: "",
        stacks: [],
        deploy: "",
        github: "",
    },
    {
        id: 6,
        image: "",
        title: "",
        description: "",
        stacks: [],
        deploy: "",
        github: "",
    },
];

export default projetos;