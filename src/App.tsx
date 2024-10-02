import HomePage from './pages/HomePage'
import AboutMePage from './pages/AboutMePage'
import Header from './components/sections/Header'
import Footer from './components/sections/Footer'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about_me" element={<AboutMePage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
