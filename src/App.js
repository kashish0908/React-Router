import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Post from './Pages/Post'
import NotFound from "./Pages/NotFound";
import { useState } from "react";

function App() {
  const [login, setLogin]= useState(false);
  return (
    <BrowserRouter>

    <div className="App">
    <Header />
    
      
    
    <button onClick={()=>setLogin(!login)}>{login?"logout":"login"}
    </button>
    
    <Routes>
    <Route path='/' element={<Home/>} exact />
    <Route path='/about' element={<About />} />
    <Route path='/profile'>
    <Profile login={login} />
    </Route>
    <Route path='/post/:id' element={<Post />} />
    <Route element={<NotFound />} />
    </Routes>
    </div>
    
    
    </BrowserRouter>
    
  );
}

export default App;
