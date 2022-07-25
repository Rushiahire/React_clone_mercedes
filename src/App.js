import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <AppRoutes/>
    </div>
  );
}

export default App;
