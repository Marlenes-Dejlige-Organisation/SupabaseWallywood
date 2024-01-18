// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Hooks } from './pages/Hooks/Hooks';
import { ToDo } from './pages/ToDo/ToDo';
import { Counter } from './pages/Counter/Counter';
import { Jokes } from './pages/Jokes/Jokes';
import { NotFound } from './components/NotFound/NotFound';
import { UseToast } from './components/Toast/UseToast'; // Tjek at import-stien er korrekt

function App() {
  const { showToast, toast } = UseToast();

  return (
    <>
      <Navigation />
      <Main>
        {toast && <div className={`toast ${toast.type}`}>{toast.message}</div>}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Send showToast-prop til Hooks */}
          <Route path="/hooks" element={<Hooks showToast={showToast} />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/counter" element={<Counter showToast={showToast} />} />
          <Route path="/jokes" element={<Jokes showToast={showToast} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
