export function Modal({ project, closeModal }) {
    if (!project) return;

    return (
        <div className="w-screen h-screen bg-[black]/60 absolute">
            <section className="flex flex-col justify-between w-10/12 h-3/5 bg-terciaryColor relative text-base left-32 top-44 rounded-lg">
                <div className="flex">
                    <div className="w-1/2 h-full m-5">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="w-1/2 h-full flex flex-col gap-5 m-5">
                        <span
                            className="flex flex-row justify-between font-bold text-3xl text-"
                            onClick={closeModal}
                        >
                            <h3>{project.title}</h3>
                            <i className="fa-solid fa-xmark cursor-pointer"></i>
                        </span>
                        <p>{project.description}</p>
                        <div className="">
                            
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
