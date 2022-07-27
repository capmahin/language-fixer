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
import ForKids from "./components/Pages/For Kids/ForKids"
import Quizzes from "./components/Pages/Home/Quizzes";
import Tutorial from "./components/Pages/Tutorial/Tutorials";
import NotFound from "./components/Pages/Shared/NotFound";

function App() {
    return (
        <div className="bg-primary">
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/quiz" element={<Quizzes />} />
                <Route path="/kids" element={<ForKids />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default App;
