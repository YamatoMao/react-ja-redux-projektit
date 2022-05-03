import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Animals from "./components/Animals";
import Laskuri from "./components/Laskuri";
import Koti from "./components/Koti";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Kotisivu</Link>
          </li>
          <li>
            <Link to="/laskuri">Laskuri</Link>
          </li>
          <li>
            <Link to="/elaimet">Eläimet</Link>
          </li>
        </ul>
      </nav>
 
      <Routes>
        <Route path="/" element={<Koti />} />
        <Route path="laskuri/*" element={<Laskuri />} />
        <Route path="elaimet/*" element={<Animals />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
