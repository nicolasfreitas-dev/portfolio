export function Modal({ project, closeModal }) {
    if (!project) return;

    return (
        <div className="w-screen md:h-[900px] xs:h-[100vh] bg-[black]/40 absolute">
            <section className="flex flex-col justify-between w-10/12 md:h-3/5 xs:h-[65%] bg-modalBgColor relative text-base md:left-32 md:top-44 xs:left-7 xs:top-40 rounded-xl shadow-md z-50">
                <div className="md:flex md:flex-row xs:flex xs:flex-col-reverse xs:items-center xs:gap-5 xs:mt-5 md:mt-5">
                    <div className="md:w-1/2 xs:w-3/4 md:h-full md:m-5">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="md:w-1/2 xs:w-3/4 md:h-full flex flex-col gap-5 md:m-5">
                        <span
                            className="flex flex-row justify-between font-bold text-3xl text-violet-500"
                            onClick={closeModal}
                        >
                            <h3 className="text-violet-500 xs:text-base md:text-3xl">{project.title}</h3>
                            <i className="fa-solid fa-xmark cursor-pointer xs:text-2xl md:text-3xl"></i>
                        </span>
                        <p className="text-sm text-detailColorTwo xs:text-justify xs:tracking-tighter">
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
                <div className="flex justify-center items-center gap-5 w-1/2 pb-5 xs:mx-auto md:mx-0">
                    <button className="flex items-center justify-center md:gap-5 xs:gap-2 xs:px-2 w-36 h-10 rounded-xl hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in bg-detailColorOne text-lg">
                        <i className="fa-solid fa-globe"></i>
                        <a className="xs:text-sm" href={project.deploy} target="_blank">
                            Deploy
                        </a>
                    </button>
                    <button className="flex items-center justify-center md:gap-5 xs:gap-2 xs:px-2 w-36 h-10 rounded-xl hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in bg-detailColorOne text-lg">
                        <i className="fa-brands fa-github"></i>
                        <a className="xs:text-sm" href={project.github} target="_blank">
                            GitHub
                        </a>
                    </button>
                </div>
            </section>
        </div>
    );
}
