import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState("Hola Mundo");

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // toma el ultimo cambio que se ingresa más el estado anterior
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // se deshabilita el send por defecto de navegador, ya no se usa eso
        console.log("Submit Echo");
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