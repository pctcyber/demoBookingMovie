import React, { useState } from 'react'
// Hook chi su dung cho rfc(react function component)
export default function UseStateHook() {


    let [state, setState] = useState({
        number: 1,
        singleNumber: 0,
    });


    const handleClick = () => {
        setState({
            number: state.number + 1,
            singleNumber: state.singleNumber + 1,
        })
    }

    return (
        <div className='container'>
            <h1>{state.number} - {state.singleNumber}</h1>
            <button className="btn btn-success" onClick={() => {
                handleClick()
            }} >+</button>
        </div>
    )
}
