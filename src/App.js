import './App.css';
import NavBar from './components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Shared/Footer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
