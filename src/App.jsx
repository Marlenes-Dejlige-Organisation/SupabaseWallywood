import './App.scss'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { Hooks} from './pages/Hooks/Hooks'
import { About } from './pages/About/About'
import { ToDo } from './pages/ToDo/ToDo'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation';
import {NotFound} from './components/NotFound/NotFound'


function App() {


  return (
    <>
        <Navigation />

    <Main>
  <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="*" element={<NotFound />} />
    
  </Routes>
    </Main>
    <Footer/>
    </>
  )
}

export default App
