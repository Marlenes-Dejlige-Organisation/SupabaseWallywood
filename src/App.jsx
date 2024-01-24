// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Plakater } from './pages/Plakater/Plakater';
import { Contact } from './pages/Contact/Contact';
import { Login } from './pages/Login/Login';
import { NotFound } from './components/NotFound/NotFound';
import PageContainer from './components/PageContainer/PageContainer';

import './app.scss'; 
import { PosterList } from './components/Poster-routing/PosterList';
import { PosterDetails } from './components/Poster-routing/PosterDetails';

function App() {
  
  return (
    <>
    <PageContainer>
      <Navigation />
      <Main>
     
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
  
          <Route path="/plakater" element={<Plakater />} >
            <Route path=":genre" element={<PosterList/>}/>
            <Route path=":genre/:poster" element={<PosterDetails/>}/>

          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
      </PageContainer>
    </>
  );
}

export default App;
