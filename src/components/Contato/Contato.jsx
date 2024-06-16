export function Contato() {
    return (
        <section
            className="w-full h-screen bg-primaryColor flex flex-col items-center justify-start"
            id="Contato"
        >
            <h2 className="text-4xl font-bold mt-24">
                Contato<span className="text-detailColorOne">.</span>
            </h2>
            <form className="w-[450px] h-[480px] bg-modalBgColor mt-12 flex flex-col items-center justify-start gap-5 rounded-xl">
                <div className="flex flex-col gap-2 items-start justify-center mt-8">
                    <label htmlFor="nome" className="text-lg ">
                        Nome
                    </label>
                    <input
                        type="text"
                        name="nome"
                        className="w-96 h-10 rounded-lg outline-none text-black text-sm focus:border-[3px] focus:border-detailColorOneHover px-2"
                        placeholder="Nome"
                    />
                </div>
                <div className="flex flex-col gap-2 items-start justify-center">
                    <label htmlFor="email" className="text-lg ">
                        E-mail
                    </label>
                    <input
                        type="text"
                        name="nome"
                        className="w-96 h-10 rounded-lg outline-none text-black text-sm focus:border-[3px] focus:border-detailColorOneHover px-2"
                        placeholder="@mail.com"
                    />
                </div>
                <div className="flex flex-col gap-2 items-start justify-center">
                    <label htmlFor="textarea" className="text-lg ">
                        Mensagem
                    </label>
                    <textarea
                        type="text"
                        name="nome"
                        className="w-96 h-32 rounded-lg outline-none text-black text-sm focus:border-[3px] focus:border-detailColorOneHover px-2"
                        placeholder="Me envie uma mensagem :)"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-32 h-10 bg-detailColorOne rounded-3xl flex justify-center items-center cursor-pointer hover:scale-110
                    hover:bg-detailColorOneHover transition duration-200 ease-in font-bold text-xs"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </section>
    );
}
