// para crear un functional component con prop types usar rafcp
import PropTypes from "prop-types"
import { useState } from "react";

const CounterApp = ({ value }) => {

    const handleAdd = (e) => {
        setCounter(counter + 1);
        // setCounter((c) => c + 1); dos formas de usar el counter
    }


    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 2223
}

export default CounterApp;
