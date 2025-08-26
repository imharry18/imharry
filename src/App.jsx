import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'


export default function App() {
  return (
    <div >
      <Navbar />
      <main className="pt-20">
        <Home />
      </main>
    </div>
  );
}
