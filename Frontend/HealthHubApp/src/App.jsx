import {BrowserRouter} from 'react-router-dom'
import { Navbar } from "./components/Navbar"
import { AllRoutes } from './routes/AllRoutes'
import Chatbot from './ChatBot/ChatBot'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AllRoutes/>
      <Chatbot/>
    </BrowserRouter>
  )
}

export default App
