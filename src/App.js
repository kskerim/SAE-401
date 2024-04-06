import './App.css';
import Blog from './Blog.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forum from "./pagesBlog/Forum";
import Activites from './pagesBlog/Activites';
import NousConnaitre from './pagesBlog/NousConnaitre';
import Adherer from './pagesBlog/Adherer';
import Promouvoir from './pagesBlog/Promouvoir';
import Apprendre from './pagesBlog/Apprendre';
import Enseigner from './pagesBlog/Enseigner';
import Divers from './pagesBlog/Divers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Blog />} />
          <Route path="Forum" element={<Forum />} />
          <Route path="Activités" element={<Activites />} />
          <Route path="Adhérer" element={<Adherer />} />
          <Route path="Promouvoir" element={<Promouvoir />} />
          <Route path="Apprendre" element={<Apprendre />} />
          <Route path="Enseigner" element={<Enseigner />} />
          <Route path="Divers" element={<Divers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
