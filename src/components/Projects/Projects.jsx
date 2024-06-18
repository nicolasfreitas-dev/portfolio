import { useState } from "react";
import { Cards } from "../Card/Cards";
import { Modal } from "../Modal/Modal";
import projetos from "./projetos";

export function Projects() {
    const [selectedProject, setSelectedProject] = useState(false);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(false);
    };

    return (
        <section className="w-full md:h-[900px] xs:h-full xs:py-5 bg-primaryColor flex flex-col items-center justify-start" id="Projetos">
            <h2 className="md:text-4xl xs:text-2xl font-bold mt-36 xs:mt-48">
                Projetos<span className="text-detailColorOne">.</span>
            </h2>
            <div className="md:w-[1280px] xs:w-full h-full md:flex md:flex-wrap md:basis-0 md:items-center md:justify-center md:gap-8 py-10 xs:flex xs:flex-wrap xs:gap-8 xs:items-center xs:justify-center">
                {projetos.map((project, index) => {
                    return (
                        <Cards
                            project={project}
                            key={index}
                            isOpen={handleOpenModal}
                        />
                    );
                })}
            </div>
            <Modal project={selectedProject} closeModal={handleCloseModal} />
            <div className="w-full flex items-center justify-center">
                <a href="https://github.com/nicolasfreitas-dev?tab=repositories" target="_blank">
                    <button className="w-32 h-10 bg-detailColorOne rounded-3xl flex justify-center items-center cursor-pointer hover:scale-110
                    hover:bg-detailColorOneHover transition duration-200 ease-in font-bold text-xs">
                        Ver mais projetos
                    </button>
                </a>
            </div>
        </section>
    );
}
