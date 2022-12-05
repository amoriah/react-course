import { useState } from 'react'

function RandomNumber (props) {
    const [number, setNumber] = useState(0);

    function changeNumber() {
        setNumber(Math.floor(Math.random() * props.maxNum))
    }

    return (
        <div>
            <h1>{ number }</h1>
            <button onClick={ changeNumber }>Generate new number</button>
        </div>
    )
}

export default RandomNumber