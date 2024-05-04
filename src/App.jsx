import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./pages/Home"
import Certificados from './components/Certificados'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Experiencia from './components/Experiencia'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="certificados" element={<Certificados/>}/>
          <Route path="#experiencias" element={<Experiencia/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
