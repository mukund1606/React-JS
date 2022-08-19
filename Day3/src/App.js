import React from 'react';
import './App.css';
import { useState } from 'react';
import Banner from './Banner';
import Products from './Products';

function App() {
    let firstname = "John";

    let [data, setData] = useState("Thor");

    function changeName() {
        setData(firstname);
    }
    let [banner, setBanner] = useState(true)
    function hideBanner() {
        setBanner(false);
    }

    return (
        <div>
            <h1>Welcome To React App</h1>
            <h2>Hello {data}</h2>
            <button onClick={changeName}>Click</button>
            {/* <Banner name="ABC" age="32" />
            <Banner name="ABCDEF" /> */}
            <Products />
            {
                banner === true ? (<Banner name="Mukund" />) : null
            }
            <button onClick={hideBanner}>Remove Banner</button>
        </div >
    );
}

export default App;
