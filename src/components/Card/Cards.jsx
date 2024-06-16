export function Cards({ project, isOpen }) {
    return (
        <section
            className="md:w-96 xs:w-72 md:h-56 xs:h-44 hover:scale-110 transition duration-300 ease-in-out relative shadow-lg cursor-pointer text-base"
            onClick={() => isOpen(project)}
        >
            <img
                src={project.image}
                alt={project.title}
                className="md:w-96 xs:w-72 md:h-56 xs:h-44 object-cover"
            />
            <div 
            className="md:w-96 xs:w-72 md:h-56 xs:h-44 absolute inset-0 flex flex-col justify-center items-center bg-[black]/65 border-b-4 ]
            border-b-detailColorOne gap-2"
            >
                <h4 className="font-bold">{project.title}</h4>
                <span className="text-sm">Ver mais</span>
            </div>
        </section>
    );
}