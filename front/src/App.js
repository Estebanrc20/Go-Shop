import './App.css';
import React from 'react'; 
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes> 
            <Route path="/Home" element={<Home />}/>
          </Routes>
          </div>
       <Footer />
      </div>
      </Router>
    );
  }

export default App;
