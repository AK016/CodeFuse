import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer.';
import MainRoutes from './Routes/MainRoute';
function App() {
  return (
    <div className="App">

      <NavBar/>
      <MainRoutes/>
      <Footer/>

    </div>
  );
}

export default App;
