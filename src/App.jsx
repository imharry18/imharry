import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'


export default function App() {
  return (
    <div >
      <Navbar />
      <main className='mt-16'>
        <Home />
      </main>
    </div>
  );
}
