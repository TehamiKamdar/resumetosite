import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
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
        <Route path="/builder" element={<Builder />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
