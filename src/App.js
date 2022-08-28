import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Anatomi from "./Pages/Anatomi";
import Beranda from "./Pages/Beranda";
import Detail from "./Pages/Detail";
import Foto from "./Pages/Foto";
import Klasifikasi from "./Pages/Klasifikasi";
import Metamorfosis from "./Pages/Metamorfosis";
import PageNotFound from "./Pages/PageNotFound";
import Tentang from "./Pages/Tentang";

function App() {
  return (
    <div className="bg-secondary-softblue">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/klasifikasi" element={<Klasifikasi />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/foto" element={<Foto />} />
          <Route path="/anatomi" element={<Anatomi />} />
          <Route path="/metamorfosis" element={<Metamorfosis />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
