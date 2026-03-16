import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeBuilderForm from './components/ResumeBuilderForm.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/builder" element={<ResumeBuilderForm />} />
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>,
)
