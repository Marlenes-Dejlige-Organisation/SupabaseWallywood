import './App.scss'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation';
import {NotFound} from './components/NotFound/NotFound'


function App() {


  return (
    <>
        <Navigation />
    <Header/>
    <Main>
  <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
    
  </Routes>
    </Main>
    <Footer/>
    </>
  )
}

export default App
