import Nav from "./components/Nav";
import { Contact, Hero, Skills, Work } from "./container";

const App = () => {
  return (
    <div className="w-full h-screen bg-gray-900">
      <Nav />
      <div className="w-3/5 mx-auto">
        <Hero />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default App;
