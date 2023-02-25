import './App.css'
import Home from "./pages/home"
import { Link , Route , Routes } from "react-router-dom";
function App() {
  return (
    <>
    <nav>
    <Link to="/Home">Home</Link>
    </nav>
    <Routes>
        <Route path="/Home" element={<Home/>}/>
     </Routes>
    </>
  )
}
export default App
