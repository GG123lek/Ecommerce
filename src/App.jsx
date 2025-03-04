import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
function App() {


  return (
    <>
     <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/shop" element={<Shop />} />
       </Routes>
       <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
