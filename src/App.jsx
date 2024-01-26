// Import dependencies
import { React, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { IoGlasses, IoGlassesOutline } from 'react-icons/io5';
import Toggle from './components/Toggle.jsx';

// Import components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // const [mode, setMode] = useState('light');

  // const toggleMode = () => mode === 'dark' ? setMode('light') : setMode('dark');

  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <header>
        {/* Dark Mode Toggle Button */}

        <Toggle 
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />

        {/* {mode === 'light' ?
        <IoGlasses className="toggle-btn" onClick={toggleMode} /> : 
        <IoGlassesOutline className="toggle-btn" onClick={toggleMode} />} */}
        <Header />
      </header>
      <main>
        <div className="main-container">
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;
