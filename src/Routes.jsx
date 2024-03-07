import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
