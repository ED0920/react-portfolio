import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from "./components/Resume";
import { HashRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

function Layout({ children }) {
  return (
    <HashRouter>
      <div>
        <header className="App-header">
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </div>
    </HashRouter>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout ><AboutMe /></Layout>,
  },
  {
    path: "/portfolio",
    element: <Layout><Portfolio /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "/resume",
    element: <Layout><Resume /></Layout>,
  },
]);


function App() {
  return (
    <div className="App">

      <RouterProvider router={router} />
      {/* <AboutMe /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      {/* <Resume /> */}

    </div>
  );
}


export default App;
