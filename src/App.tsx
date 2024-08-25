import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Dashboard from "./components/Dashboard";
import ImageGenerator from "./components/ImageGenerator";


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Dashboard />} />
        <Route path="/image" element={< ImageGenerator/>}/>
      </Routes>
    </BrowserRouter>
  );
  
} 

export default App; 