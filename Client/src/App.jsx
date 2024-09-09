import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from './component/Login/Login.jsx'
import Lobby from "./component/Lobby/Lobby.jsx"
import Room from "./component/VideoCall/VideoCall.jsx"
import { PreJoin } from "@livekit/components-react"
import Entrace from "./component/Entrace/Entrace.jsx"
import Teacher from "./component/Dashboard/teacher.jsx"
import JoinClass from "./component/Class/JoinClass.jsx"
import CreateClass from "./component/Class/CreateClass.jsx"
import Student from "./component/Dashboard/Student.jsx"


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<CreateClass />}/>
        <Route path="/videocall" element={<Room/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
