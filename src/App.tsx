import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Dashboard from "./components/Dashboard";
import ImageGenerator from "./components/ImageGenerator";
import SobreNosotros from "./components/SobreNosotros";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Dashboard />} />
        <Route path="/image" element={< ImageGenerator/>}/>
        <Route path="/nosotros" element={<SobreNosotros/>}/>
      </Routes>
    </BrowserRouter>
  );
  
} 

export default App; 