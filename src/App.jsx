import React from 'react';
import './App.css';
import Home from './pages/homepage/homepage'
import NavBar from './components/navbar/navbar'
import Announcement from './components/announcement/announcement'

function App() {
  return (
    <main>
      <Announcement />
      <NavBar />
      <Home />
    </main>
  );
}

export default App;