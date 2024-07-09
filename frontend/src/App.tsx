import { Routes, Route } from "react-router-dom"
import Homepage from "./Client/Pages/Homepage"
import Login from "./Admin/Pages/Login"
import Analytics from "./Admin/Pages/Analytics"
import Management from "./Admin/Pages/Management"
import Create from "./Admin/Pages/Create"
import Subscribers from "./Admin/Pages/Subscribers"
import Profile from "./Admin/Pages/Profile"
import Settings from "./Admin/Pages/Settings"
import NotFound from "./NotFound"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>

        <Route path="/admin/login" element={<Login />}></Route>
        <Route path="/admin/analytics" element={<Analytics />}></Route>
        <Route path="/admin/management" element={<Management />}></Route>
        <Route path="/admin/create" element={<Create />}></Route>
        <Route path="/admin/subscribers" element={<Subscribers />}></Route>
        <Route path="/admin/profile" element={<Profile />}></Route>
        <Route path="/admin/settings" element={<Settings />}></Route>

        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    
    </>
  )
}

export default App
