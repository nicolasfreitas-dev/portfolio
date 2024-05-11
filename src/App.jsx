import { Header } from "./components/Header/header";
import { Home } from "./components/Home/home";
import { About } from "./components/About/about";
import { Skills } from "./components/Skills/skills";
import { Projects } from "./components/Projects/projects";
import { Contato } from "./components/Contato/contato";
import { Modal } from "./components/Modal/modal";

function App() {
    return (
        <div className="font-[Poppins] text-secondaryColor">
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contato />
            <Modal />
            <footer className="flex items-center justify-center font-medium w-full h-10 text-secondaryColor bg-detailColorOne text-base">
                <p>Copyright &copy; 2024 Nicolas Freitas</p>
            </footer>
        </div>
    );
}

export default App;