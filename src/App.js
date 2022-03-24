import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Mission from "./Pages/Mission/Mission";
import Navigation from "./Pages/Shared/Navigation";
import Team from "./Pages/Team/Team";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
