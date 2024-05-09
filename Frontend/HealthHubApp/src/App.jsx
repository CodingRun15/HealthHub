import {BrowserRouter} from 'react-router-dom'
import { Navbar } from "./components/Navbar"
import { AllRoutes } from './routes/AllRoutes'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AllRoutes/>
    </BrowserRouter>
  )
}

export default App
