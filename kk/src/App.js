import './App.css';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import NotFound from './Pages/NotFound';
import Home from './Pages/Home'
import Portfolio from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
