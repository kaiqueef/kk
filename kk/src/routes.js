//TODO:: CRIAR ARQUIVO COM TODAS AS ROTAS E CHAMA-LO NO APP

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
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
