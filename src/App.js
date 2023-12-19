import './App.css'
import { SideBar } from './view/SideBar'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import Dropdown from './view/Dropdwon'

function App () {
  return (
    <div className='App'>
      {/* <Dropdown /> */}
      <BrowserRouter>
        <Router />
        {/* <SideBar /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
