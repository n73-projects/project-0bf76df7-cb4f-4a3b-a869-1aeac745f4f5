import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
