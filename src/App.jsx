// Import dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';

// Import components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;
