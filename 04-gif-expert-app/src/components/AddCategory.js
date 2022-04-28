import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // toma el ultimo cambio que se ingresa más el estado anterior
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // se deshabilita el send por defecto de navegador, ya no se usa eso
        if (inputValue.trim().length > 2) {
            setCategorias(cat => [...cat, inputValue]);
            setInputValue("")
        }
    }

    // ya no es necesario enviar un fragment porque el componente padre ya lo está realizando
    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default AddCategory

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}