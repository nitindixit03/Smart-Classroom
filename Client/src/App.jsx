import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from './component/Login/Login.jsx'
import Lobby from "./component/Lobby/Lobby.jsx"
import Room from "./component/VideoCall/VideoCall.jsx"
import { PreJoin } from "@livekit/components-react"
import Entrace from "./component/Entrace/Entrace.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lobby />}/>
        <Route path="/videocall" element={<Room/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
