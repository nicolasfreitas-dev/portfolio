import { Header } from "./components/header";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Skills } from "./components/skills"

function App() {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Skills />
            <footer>
                <p>Copyright &copy 2024 Nicolas Freitas</p>
            </footer>
        </div>
    );
}

export default App;
