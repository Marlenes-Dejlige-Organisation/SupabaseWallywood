import './App.scss'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
    <Header/>
    <Main>
  <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
    
  </Routes>
    </Main>
    <Footer/>
    </>
  )
}

export default App
