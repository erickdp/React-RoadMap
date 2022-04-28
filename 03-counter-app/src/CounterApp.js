// para crear un functional component con prop types usar rafcp
import PropTypes from "prop-types"
import { useState } from "react";

const CounterApp = ({ value }) => {

    const handleAdd = (e) => {
        setCounter(counter + 1);
        // setCounter((c) => c + 1); dos formas de usar el counter
    }

    const handleReset = () => setCounter(value);

    const handleSubstract = () => setCounter(counter - 1);


    const [counter, setCounter] = useState(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 10
}

export default CounterApp;
