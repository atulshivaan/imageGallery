
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Addimage from './pages/Addimage'
import GetImage from './pages/GetImage'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/add-image' element={<Addimage/>}/>
        <Route path='get-image' element={<GetImage/>}/>
      </Routes>
    </>
  )
}

export default App
