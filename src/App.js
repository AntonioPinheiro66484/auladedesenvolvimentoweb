import './App.css';
import{BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cadastro from './pages/Cadastro/Cadastro';
function App() {
  return (
    
    <>
      <BrowserRouter>
        <NavBar/>
        <h1>Laboratório de Desenvolvimento Web</h1>
        <main className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cadastro' element={<Cadastro/>} />
        </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
