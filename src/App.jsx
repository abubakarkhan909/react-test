import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import Card from './Components/Card/Card'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Work from './Components/Work/Work'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='./Services' element={<Services/>} />
      <Route path='./work' element={<Work/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
