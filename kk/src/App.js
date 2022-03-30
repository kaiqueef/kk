import './App.css';

import Presentation from './components/home/sections/presentation/Presentation'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Navigations from './components/home/sections/navigation/Navigations'
import Jobs from './components/home/sections/jobs/Jobs'

import cemetery from './images/jobs/cemetery.png'
import cemeteryGrayscale from './images/jobs/cemetery-grayscale.png'
import OVNI from './images/jobs/OVNI.png'
import predio from './images/jobs/predio.jpg'
import universo from './images/jobs/universo.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <Header/>
        <Presentation subtitulo="Biblioteca 3d"/>
        <Navigations/>
        <div className="jobs-header">
          <h3>Portfólio</h3>
        </div>
        <Jobs titulo="Encomendas" image={cemetery} grayImage={cemeteryGrayscale}></Jobs>
        <Jobs titulo="ArchViz" image={predio}></Jobs>
        <Jobs titulo="Espaço" image={universo}></Jobs>
        {/* <Jobs image={OVNI}></Jobs> */}
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
