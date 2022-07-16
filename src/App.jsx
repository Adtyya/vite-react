import { Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
