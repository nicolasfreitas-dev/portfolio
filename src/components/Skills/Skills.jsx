import htmlImg from "./../../assets/html-5-svgrepo-com.svg";
import cssImg from "./../../assets/css-3-svgrepo-com.svg";
import javascriptImg from "./../../assets/js-svgrepo-com.svg";
import gitImg from "./../../assets/git-svgrepo-com.svg";
import reactImg from "./../../assets/react-svgrepo-com.svg";
import tailwindcssImg from "./../../assets/tailwind-svgrepo-com.svg";
import typescriptImg from "./../../assets/typescript-icon-svgrepo-com.svg";
import sassImg from "./../../assets/sass-svgrepo-com.svg";

export function Skills() {
    return (
        <section className="w-full h-[600px] bg-primaryColor flex flex-col items-center justify-start" id="Skills">
            <h2 className="text-4xl font-bold mt-36">
                Habilidades<span className="text-detailColorOne">.</span>
            </h2>
            <div className="w-full h-full flex flex-wrap items-start justify-center gap-10 mt-14 text-base basis-0">
                <div className="flex flex-col items-center justify-center gap-3 bg-modalBgColor border-b-4 border-b-detailColorOne size-32 shadow-sm rounded-tl-3xl rounded-br-3xl hover:scale-110 hover:transition-all hover:duration-300">
                    <img className="size-[50px]" src={htmlImg} alt="icone html" />
                    <span className="text-sm">HTML 5</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 bg-modalBgColor border-b-4 border-b-detailColorOne size-32 shadow-sm rounded-tl-3xl rounded-br-3xl hover:scale-110 hover:transition-all hover:duration-300">
                    <img className="size-[50px]" src={cssImg} alt="icone css" />
                    <span className="text-sm">CSS 3</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 bg-modalBgColor border-b-4 border-b-detailColorOne size-32 shadow-sm rounded-tl-3xl rounded-br-3xl hover:scale-110 hover:transition-all hover:duration-300">
                    <img className="size-[50px]" src={javascriptImg} alt="icone javascript" />
                    <span className="text-sm">Javascript</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 bg-modalBgColor border-b-4 border-b-detailColorOne size-32 shadow-sm rounded-tl-3xl rounded-br-3xl hover:scale-110 hover:transition-all hover:duration-300">
                    <img className="size-[50px]" src={gitImg} alt="icone git" />
                    <span className="text-sm">GIT</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 bg-modalBgColor border-b-4 border-b-detailColorOne size-32 shadow-sm rounded-tl-3xl rounded-br-3xl hover:scale-110 hover:transition-all hover:duration-300">
                    <img className="size-[50px]" src={reactImg} alt="icone react" />
                    <span className="text-sm">React</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 bg-modalBgColor border-b-4 border-b-detailColorOne size-32 shadow-sm rounded-tl-3xl rounded-br-3xl hover:scale-110 hover:transition-all hover:duration-300">
                    <img className="size-[50px]" src={tailwindcssImg} alt="icone tailwindcss" />
                    <span className="text-sm">Tailwindcss</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 bg-modalBgColor border-b-4 border-b-detailColorOne size-32 shadow-sm rounded-tl-3xl rounded-br-3xl hover:scale-110 hover:transition-all hover:duration-300">
                    <img className="size-[50px]" src={typescriptImg} alt="icone typescript" />
                    <span className="text-sm">Typescript</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 bg-modalBgColor border-b-4 border-b-detailColorOne size-32 shadow-sm rounded-tl-3xl rounded-br-3xl hover:scale-110 hover:transition-all hover:duration-300">
                    <img className="size-[50px]" src={sassImg} alt="icone sass" />
                    <span className="text-sm">Sass</span>
                </div>
            </div>
        </section>
    );
}
