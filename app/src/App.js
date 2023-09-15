import NavBar from "./components/NavBar";
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
