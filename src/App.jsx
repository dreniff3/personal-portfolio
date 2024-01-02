// Import dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';
import { IoGlasses, IoGlassesOutline } from 'react-icons/io5';

// Import components

function App() {
  return (
    <>
      <main>
        <IoGlasses className="toggle-btn" />
        <IoGlassesOutline 
          className="toggle-btn" 
          style={{ display: 'none' }}
        />
        <Outlet />
      </main>
    </>
  )
}

export default App;
