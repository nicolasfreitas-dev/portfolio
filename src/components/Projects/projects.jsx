import { Cards } from "./cards";
import { projetos } from "./projetos";

export function Projects() {
    return (
        <section className="w-full h-screen bg-primaryColor flex flex-col items-center justify-start">
            <h2 className="text-4xl font-bold">
                Projetos<span className="text-detailColorOne">.</span>
            </h2>
            <div className="w-full h-full grid grid-cols-4 gap-5 pt-5 mt-5">
                {projetos.map((item, index) => {
                    return <Cards key={index} props={item} />
                })}
            </div>
        </section>
    );
}
