import React from "react";
import { Route , Routes } from 'react-router-dom'
import Form from './Components/form.jsx'
import Home from './Components/home.jsx'
import Nav from './Components/nav.jsx'
function App() {
  return (
    <div>
      
      <Nav />
      <Routes>
        <Route
          path = '/form'
          element = {<Form/>}
        />
        <Route
          path = '/'
          element = {<Home/>}
          />
      </Routes>
    </div>
  )
}

export default App;
