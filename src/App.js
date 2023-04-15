import './App.css';
import MyComponent from './components/MyComponent';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from "./components/Resume";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent />
      </header>
      <AboutMe />
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      {/* <Resume /> */}
      <Footer />
    </div>
  );
}


export default App;
