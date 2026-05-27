import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Achivements from "./pages/Achivements";
import Certification from "./pages/Certification";
import Expirence from "./pages/Expirence";
import Personal from './pages/personal';


function App() {
  return (
    <div>
      <h1 className='text-center my-5'>My Resume</h1>
      <BrowserRouter>
      <nav className='text-center'>
        <Link className='mx-2' to="/">Personal</Link> |
        <Link className='mx-2' to="/Certification">Education</Link> |
        <Link className='mx-2' to="/Skills">Skills</Link> |
        <Link className='mx-2' to="/Expirence">Expirence</Link> |
        <Link className='mx-2' to="/Project">Project</Link> |
        <Link className='mx-2' to="/Achivements">Achivements</Link> 
      </nav>

      <Routes>
        <Route path="/" element={<Personal/>} />
        <Route path="/Certification" element={<Certification/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/Expirence" element= {<Expirence/>}/>
        <Route path="/Project" element={<Project/>} />
        <Route path="/Achivements" element={<Achivements/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
