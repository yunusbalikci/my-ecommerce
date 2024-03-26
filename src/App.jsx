import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import { useSelector } from "react-redux"
import Card from "./components/Card"
import Login from "./pages/Login"
import Register from "./pages/Register"
function App() {
  const {drawer} = useSelector((state) => state.drawer)
  console.log(drawer)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Details />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
        {drawer && <Card></Card>}
      </BrowserRouter>
    </>
  )
}

export default App
