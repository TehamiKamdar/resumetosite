import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuilderLayout from "./layouts/BuilderLayout";
import './App.css'
import Layout from './layouts/Layout';


function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
        <Route path="/builder" element={<BuilderLayout />}>
          <Route index element={<Details />} />
          {/* <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="theme" element={<Theme />} />
          <Route path="preview" element={<Preview />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App
