import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Preloader from './components/PreLoader';

function App() {
    return (
        <div className="App">
            <Navbar />
           <Preloader/>
        </div>
    );
}

export default App;
