//TODO:: CRIAR ARQUIVO COM TODAS AS ROTAS E CHAMA-LO NO APP

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="all" />
          <Route path="ArchViz" />
          <Route path="3d" />
          <Route path="grafite" />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
