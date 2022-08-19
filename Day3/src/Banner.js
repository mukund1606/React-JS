import React from 'react'
import { useEffect, useState } from 'react';

function Banner(props) {
    let [data, setData] = useState("Elephant")
    function changeData() {
        setData("Lion")
    }
    useEffect(function () {
        console.log("Banner rendered");
        return function () {
            console.log("Banner unmounted");
        }
    })
    return (
        < div >
            <h1>This is a Banner Component</h1>
            <h2>Hello {props.name}</h2>
            <h2>{data}</h2>
            <button onClick={changeData}>Change Something</button>
        </div >
    )
}

export default Banner;