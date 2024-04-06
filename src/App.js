import './App.css';
import Accueil from './Accueil.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forum from "./pagesBlog/Forum";
import Activites from './pagesBlog/Activites';
import Association from './pagesBlog/Association';
import Elus from './pagesBlog/Elus';
import Bulletins from './pagesBlog/Bulletins';
import Contact from './pagesBlog/Contact';
import Pourquoi from './pagesBlog/Pourquoi';
import Fiche from './pagesBlog/Fiche';
import Promouvoir from './pagesBlog/Promouvoir';
import Secondaire from './pagesBlog/Secondaire';
import Postbac from './pagesBlog/Postbac';
import Enseignant from './pagesBlog/Enseignant';
import Annales from './pagesBlog/Annales';
import Programmes from './pagesBlog/Programmes';
import Actualite from './pagesBlog/Actualite';
import Liens from './pagesBlog/Liens';
import Agenda from './pagesBlog/Agenda';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Accueil />} />
          <Route path="Forum" element={<Forum />} />
          <Route path="Activités" element={<Activites />} />
          <Route path="Association" element={<Association />} />
          <Route path="Elus" element={<Elus />} />
          <Route path="Bulletins" element={<Bulletins />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Pourquoi" element={<Pourquoi />} />
          <Route path="Fiche" element={<Fiche />} />
          <Route path="Promouvoir" element={<Promouvoir />} />
          <Route path="Secondaire" element={<Secondaire />} />
          <Route path="Postbac" element={<Postbac />} />
          <Route path="Enseignant" element={<Enseignant />} />
          <Route path="Annales" element={<Annales />} />
          <Route path="Programmes" element={<Programmes />} />
          <Route path="Actualite" element={<Actualite />} />
          <Route path="Liens" element={<Liens />} />
          <Route path="Agenda" element={<Agenda />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
