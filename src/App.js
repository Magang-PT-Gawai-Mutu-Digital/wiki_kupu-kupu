import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Beranda from "./Pages/Beranda";


function App() {
  return (
    <div className="bg-secondary-softblue">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Beranda/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
