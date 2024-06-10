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
        <section className="w-full h-screen bg-primaryColor flex flex-col items-center justify-start" id="Projetos">
            <h2 className="text-4xl font-bold mt-24">
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
        </section>
    );
}
