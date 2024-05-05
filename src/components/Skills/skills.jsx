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
        <section className="w-full h-screen bg-primaryColor flex flex-col items-center justify-start">
            <h2 className="text-4xl font-bold">
                Habilidades<span className="text-detailColorOne">.</span>
            </h2>
            <div className="w-full h-full flex items-start justify-center gap-12 mt-10">
                <div className="flex flex-col items-center justify-center gap-2">
                    <img className="size-[60px]" src={htmlImg} alt="" />
                    <span>HTML 5</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img className="size-[60px]" src={cssImg} alt="" />
                    <span>CSS 3</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img className="size-[60px]" src={javascriptImg} alt="" />
                    <span>Javascript</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img className="size-[60px]" src={gitImg} alt="" />
                    <span>GIT</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img className="size-[60px]" src={reactImg} alt="" />
                    <span>React</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img className="size-[60px]" src={tailwindcssImg} alt="" />
                    <span>Tailwindcss</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img className="size-[60px]" src={typescriptImg} alt="" />
                    <span>Typescript</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <img className="size-[60px]" src={sassImg} alt="" />
                    <span>Sass</span>
                </div>
            </div>
        </section>
    );
}
