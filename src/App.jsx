import { Outlet } from 'react-router'
import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='min-h-screen overflow-hidden bg-black text-white'>
      
      <Navbar/>

      <main>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  )
}

export default App
