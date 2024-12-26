import { Routes, Route } from "react-router-dom"
import NotFound from './pages/NotFound'
import Login from "./pages/admin/Login"
import Manage from "./pages/admin/Manage"
import CreateNewDocumentory from "./pages/admin/CreateNewDocumentory"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/admin/login" element={<Login />}></Route>
        <Route path="/admin/manage" element={<Manage />}></Route>
        <Route path="/admin/create" element={<CreateNewDocumentory />}></Route>
      </Routes>
    </>
  )
}

export default App
