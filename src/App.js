import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="sections">
        <Header></Header>
        <Portfolio></Portfolio>
        <AboutMe></AboutMe>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
