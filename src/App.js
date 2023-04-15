import './App.css';
import MyComponent from './components/MyComponent';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent />
      </header>
      {/* <AboutMe /> */}
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
