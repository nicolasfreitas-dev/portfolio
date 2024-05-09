import { Cards } from "./cards";
import { projetos } from "./projetos";

export function Projects() {
    return (
        <section className="w-full h-screen bg-primaryColor flex flex-col items-center justify-start">
            <h2 className="text-4xl font-bold">
                Projetos<span className="text-detailColorOne">.</span>
            </h2>
            <div className="w-[1280px] h-screen flex flex-wrap items-center gap-8 pt-5 mt-5">
                {projetos.map((item, index) => {
                    return <Cards key={index} props={item} />
                })}
            </div>
        </section>
    );
}
