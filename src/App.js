import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import Screen from "./components/Screen";

function App() {


    return (
        <div className="container">
            <Screen screenContent={"Here's some words"}/>
        </div>
    );
}

export default App;
