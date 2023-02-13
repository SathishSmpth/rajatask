import Navbar from "./component/navbar";
import HomePage from "./component/home";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./component/about";
import ContactPage from "./component/contact";

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
