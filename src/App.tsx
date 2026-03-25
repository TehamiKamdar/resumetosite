import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './layouts/Layout';
import Home from "./pages/Home";
import BuilderLayout from "./layouts/BuilderLayout";
import Details from "./pages/builder/Details";
import Skills from "./pages/builder/Skills";
import Projects from "./pages/builder/Projects";
import Experience from "./pages/builder/Experience";
import Template from "./pages/builder/Templates";
import TemplateLayout from "./layouts/TemplateLayout";


function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
        <Route path="/builder" element={<BuilderLayout />}>
          <Route path="details" element={<Details />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="theme" element={<Template />} />
          {/* <Route path="preview" element={<Preview />} /> */}
        </Route>
        <Route path="/builder/theme/:themeId" element={<TemplateLayout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
