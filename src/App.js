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
import Reservation from "./components/Pages/Trial-lesson/Reservation";
import PickDate from "./components/Pages/Trial-lesson/PickDate";
import Tutorial from "./components/Pages/Tutorial/Tutorial";
import EnglishTutorials from "./components/Pages/Tutorial/English/EnglishTutorials";
import FranchTutorials from "./components/Pages/Tutorial/Franch/FranchTutorials";
import ChineseTutorials from "./components/Pages/Tutorial/Chinese/ChineseTutorials";
import SpanishTutorials from "./components/Pages/Tutorial/Spanish/SpanishTutorials";
import ForKids from "./components/Pages/For Kids/ForKids";
import Quizzes from "./components/Pages/Home/Quizzes";
import Chat from "./components/Pages/ChatApplication/Chat/Chat";


import NotFound from "./components/Pages/Shared/NotFound";
import Join from "./components/Pages/ChatApplication/Join/Join";
import QuizHome from "./components/Quiz/QuizPages/QuizHome";
import Quiz from "./components/Quiz/QuizPages/Quiz";
import Result from "./components/Quiz/QuizPages/Result";
import { useState } from "react";
import axios from "axios";
import Certificate from "./components/Quiz/QuizPages/Certificate";

import Dashboard from "./components/Pages/Dashboard/Dashboard";

import Users from "./components/Pages/Dashboard/Users";

import VideoCall from "./components/Pages/ChatApplication/VideoCall/VideoCall";
import BlogDetails from "./BlogDetails";
import Blogs from "./components/Pages/Home/Blogs";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `questions.json?amount=10&category=${category}&difficulty=${difficulty}`
    );

    setQuestions(data);
    console.log(data);
  };
  return (
    <div className="bg-primary text-primary">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about/*" element={<About />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/englishtutorial" element={<EnglishTutorials />} />
        <Route path="/franchtutorial" element={<FranchTutorials />} />
        <Route path="/chinesetutorial" element={<ChineseTutorials />} />
        <Route path="/spanishtutorial" element={<SpanishTutorials />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/join" element={<Join />} />
        <Route path="chat/:roomId" element={<Chat />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Users />}></Route>
          <Route path="users" element={<Users />}></Route>
        </Route>
        <Route
          path="/quiz"
          element={
            <QuizHome
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
              category={questions && questions[0]?.category}
              difficulty={questions && questions[0]?.difficulty}
            />
          }
        />
        <Route
          path="/quizQues"
          element={
            <Quiz
              name={name}
              questions={questions}
              setQuestions={setQuestions}
              score={score}
              setScore={setScore}
            />
          }
        />
        <Route path="/result" element={<Result name={name} score={score} />} />
        <Route path="/certificate" element={<Certificate name={name} />} />
        <Route path="/join" exact element={<Join />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/videoCall" element={<VideoCall />} />

        <Route path="/quiz" element={<Quizzes />} />
        <Route path="/kids" element={<ForKids />} />

        <Route path="/trial" element={<Reservation />} />
        <Route path="/trial/pickdate" element={<PickDate />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
