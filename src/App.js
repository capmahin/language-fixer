import "./App.css";
import NavBar from "./components/Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Contact from "./components/Pages/Contact/Contact";
import Reviews from "./components/Pages/Reviews/Reviews";
import Learn from "./components/Pages/Learn/Learn";
import SignUp from "./components/Pages/Login/Signup";
import Footer from "./components/Pages/Shared/Footer";

import Tutorial from "./components/Pages/Tutorial/Tutorial";
import EnglishTutorials from "./components/Pages/Tutorial/English/EnglishTutorials";
import FranchTutorials from "./components/Pages/Tutorial/Franch/FranchTutorials";
import ChineseTutorials from "./components/Pages/Tutorial/Chinese/ChineseTutorials";
import SpanishTutorials from "./components/Pages/Tutorial/Spanish/SpanishTutorials";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/englishtutorial" element={<EnglishTutorials />} />
        <Route path="/franchtutorial" element={<FranchTutorials />} />
        <Route path="/chinesetutorial" element={<ChineseTutorials />} />
        <Route path="/spanishtutorial" element={<SpanishTutorials />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
