import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Modal } from "./components/Modal/Modal";

function App() {
    return (
        <div className="font-[Poppins] text-secondaryColor">
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Modal />
            <footer className="flex items-center justify-center font-medium w-full h-10 text-secondaryColor bg-detailColorOne text-base relative bottom-0">
                <p className="xs:text-sm">Copyright &copy; 2024 Nicolas Freitas</p>
            </footer>
        </div>
    );
}

export default App;