// Import dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';

// Import components

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;
