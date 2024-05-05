import { Cards } from "./cards";

export function Projects() {
    return (
        <section className="w-full h-screen bg-primaryColor flex flex-col items-center justify-start">
            <h2 className="text-4xl font-bold">
                Projetos<span className="text-detailColorOne">.</span>
            </h2>
            <div>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </section>
    );
}
