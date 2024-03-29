import './App.css';
import Blog from './Blog.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Technology from "./pagesBlog/Technology";
import Design from './pagesBlog/Design';
import Culture from './pagesBlog/Culture';
import Business from './pagesBlog/Business';
import Politics from './pagesBlog/Politics';
import Opinion from './pagesBlog/Opinion';
import Science from './pagesBlog/Science';
import Health from './pagesBlog/Health';
import Style from './pagesBlog/Style';
import Travel from './pagesBlog/Travel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Blog />} />
          <Route path="technology" element={<Technology />} />
          <Route path="design" element={<Design />} />
          <Route path="culture" element={<Culture />} />
          <Route path="business" element={<Business />} />
          <Route path="politics" element={<Politics />} />
          <Route path="opinion" element={<Opinion />} />
          <Route path="science" element={<Science />} />
          <Route path="health" element={<Health />} />
          <Route path="style" element={<Style />} />
          <Route path="travel" element={<Travel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
