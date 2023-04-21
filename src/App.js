import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from "./components/Resume";
import { HashRouter, createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <header className="App-header">
        <Header />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Layout ><AboutMe /></Layout>} />
          <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
          <Route path="/resume" element={<Layout><Resume /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
        </Routes>
      </HashRouter>
    </div>
  );
}


export default App;
