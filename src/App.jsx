import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import { useSelector } from "react-redux"
import Card from "./components/Card"

function App() {
  const {drawer} = useSelector((state) => state.drawer)
  console.log(drawer)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Details />}></Route>
        </Routes>
        {drawer && <Card></Card>}
      </BrowserRouter>
    </>
  )
}

export default App
