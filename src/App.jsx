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
import { UseToast } from './components/Toast/UseToast';
import PageContainer from './components/PageContainer/PageContainer'; // Tilpas stien

import './app.scss'; // Inkluder app.scss

function App() {
  const { showToast, toast } = UseToast();

  return (
    <>
    <PageContainer>
      <Navigation />
      <Main>
        {toast && <div className={`toast ${toast.type}`}>{toast.message}</div>}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Send showToast-prop til Hooks */}
          <Route path="/plakater" element={<Plakater />} > </Route>
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
