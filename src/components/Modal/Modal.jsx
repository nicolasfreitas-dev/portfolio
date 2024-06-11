export function Modal({ project, closeModal }) {
    if (!project) return;

    return (
        <div className="w-screen h-screen bg-[black]/30 absolute">
            <section className="flex flex-col justify-between w-10/12 h-3/5 bg-modalBgColor relative text-base left-32 top-44 rounded-xl shadow-md">
                <div className="flex">
                    <div className="w-1/2 h-full m-5">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="w-1/2 h-full flex flex-col gap-5 m-5">
                        <span
                            className="flex flex-row justify-between font-bold text-3xl text-violet-500"
                            onClick={closeModal}
                        >
                            <h3 className="text-violet-500">{project.title}</h3>
                            <i className="fa-solid fa-xmark cursor-pointer"></i>
                        </span>
                        <p className="text-sm text-detailColorTwo">
                            {project.description}
                        </p>
                        <div className="flex gap-3 w-full">
                            {project.stacks.map((stack, index) => {
                                return (
                                    <span key={index}>
                                        <img
                                            src={stack}
                                            alt="stacks"
                                            className="size-8 hover:scale-110"
                                        />
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 w-1/2 pb-5">
                    <button className="flex items-center justify-center gap-5 w-36 h-10 rounded-xl hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in bg-detailColorOne text-lg">
                        <i className="fa-solid fa-globe"></i>
                        <a href={project.deploy} target="_blank">
                            Deploy
                        </a>
                    </button>
                    <button className="flex items-center justify-center gap-5 w-36 h-10 rounded-xl hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in bg-detailColorOne text-lg">
                        <i className="fa-brands fa-github"></i>
                        <a href={project.github} target="_blank">
                            GitHub
                        </a>
                    </button>
                </div>
            </section>
        </div>
    );
}
