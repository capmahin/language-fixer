import "./App.css";
import NavBar from "./components/Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Contact from "./components/Pages/Contact/Contact";
import Reviews from "./components/Pages/Reviews/Reviews";
import Learn from "./components/Pages/Learn/Learn";

import Quizzes from "./components/Pages/Home/Quizzes";
import Footer from "./components/Pages/Shared/Footer";
import TrialLesson from "./components/Pages/Home/TrialLesson";

function App() {
    return (
        <div className="bg-primary text-white">
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/quiz" element={<Quizzes />} />
                <Route path="/trialLesson" element={<TrialLesson />} />
            </Routes>
            <Footer></Footer>
        </div>
    );
}
export default App;
