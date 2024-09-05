import Home from './pages/Home'
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
        <Route path="/home" element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
