import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'


export default function App() {
  return (
    <div >
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}
