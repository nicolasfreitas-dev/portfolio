export function Modal({ project, closeModal }) {
    if (!project) return;

    return (
        <section 
            className="w-10/12 h-5/6 bg-terciaryColor absolute text-base"
        >
            <div className="flex ">
                <div className="w-1/2 h-full bg-detailColorTwo">
                   <img 
                    src={project.image}
                    alt={project.title}
                    />
                </div>
                <div className="w-1/2 bg-detailColorTwo">
                    <span 
                    className="cursor-pointer"
                    onClick={closeModal}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                    <h3>{project.title}</h3>
                    <p>
                      {project.description}  
                    </p>
                    <div>{project.stacks}</div>
                </div>
            </div>
            <div className="flex items-center gap-5 w-full h-16 bg-primaryColor">
                <button className="w-48 h-10 rounded-xl hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in bg-detailColorOne">
                    <img src="" alt="" />
                    <a href="">{project.deploy}</a>
                </button>
                <button className="w-48 h-10 rounded-xl hover:scale-110 hover:bg-detailColorOneHover transition duration-300 ease-in bg-detailColorOne">
                    <img src="" alt="" />
                    <a href="">{project.github}</a>
                </button>
            </div>
        </section>
    );
}
