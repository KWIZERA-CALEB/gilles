import { Routes, Route } from "react-router-dom"
import Homepage from "./Client/Pages/Homepage"
import Login from "./Admin/Pages/Login"
import Analytics from "./Admin/Pages/Analytics"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<Login />}></Route>
        <Route path="/admin/analytics" element={<Analytics />}></Route>

        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    
    </>
  )
}

export default App
