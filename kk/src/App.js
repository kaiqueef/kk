import './App.css';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import NotFound from './Pages/NotFound';
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio/Portfolio';
import RoutesApp from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
          <RoutesApp/>
    </div>
  );
}

export default App;
