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
        <section className="w-full h-[750px] bg-primaryColor flex flex-col items-center justify-start" id="Projetos">
            <h2 className="text-4xl font-bold mt-36">
                Projetos<span className="text-detailColorOne">.</span>
            </h2>
            <div className="w-[1280px] h-screen flex flex-wrap basis-0 items-center justify-center gap-8 py-10">
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
