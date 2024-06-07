export function Cards({ props }) {
    return (
        <section className="w-96 h-56 hover:scale-110 transition duration-300 ease-in-out relative shadow-lg cursor-pointer text-base">
            <img
                src={props.image}
                alt={props.title}
                className="w-96 h-56 object-cover "
            />
            <div 
            className="w-96 h-56 absolute inset-0 flex justify-center items-center bg-[black]/65 border-b-4 ]
            border-b-detailColorOne"
            
            >
                <h4 className="font-bold">{props.title}</h4>
            </div>
        </section>
    );
}