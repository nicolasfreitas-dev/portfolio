import { Header } from "./components/header";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contato } from "./components/contato";

function App() {
    return (
        <div className="font-[Poppins] text-secondaryColor">
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contato />
            <footer className="flex items-center justify-center font-medium w-full h-10 text-secondaryColor bg-detailColorOne">
                <p>Copyright &copy; 2024 Nicolas Freitas</p>
            </footer>
        </div>
    );
}

export default App;