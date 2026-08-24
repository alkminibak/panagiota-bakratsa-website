import { Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Approach from "./pages/Approach";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="approach" element={<Approach />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
