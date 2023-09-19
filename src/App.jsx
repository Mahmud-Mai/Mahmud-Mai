// import { inject } from "@vercel/analytics";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Contact, Hero, Experience, Work } from "./components";

const App = () => {
  inject();
  return (
    <div className="w-full h-full bg-gray-900">
      <Navbar />
      <div className="w-3/5 mx-auto">
        <Hero />
        <Experience />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
