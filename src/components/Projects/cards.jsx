export function Cards ({props}) {
    return (
        <section className="w-96 h-96 mx-5">
                <div>
                    <img 
                    className="object-cover"
                    src={props.image}
                    alt={props.title}
                    />
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                <div>
                    <span>{props.stacks}</span>
                </div>
                <div>
                    <button><a href={props.deploy}></a>Deploy</button>
                    <button><a href={props.github}></a>GitHub</button>
                </div>
        </section>
    )
}