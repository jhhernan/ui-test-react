import React from 'react';
import './App.css';
import Main from './components/Main';
import Add from './components/Add';
import Info from './components/Info';
import Votes from './components/Votes';
import Footer from './components/Footer';

function App1() {
    return (
        <div>
            <Main />
            <Info />
            <Votes />
            <Add />
            <Footer />
        </div>
    );
}

export default App1;
