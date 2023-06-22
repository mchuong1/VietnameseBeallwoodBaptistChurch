import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./components/navbar/NavBar"
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="contact" element={<></>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
