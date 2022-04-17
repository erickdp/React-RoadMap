import PropTypes from "prop-types";
// Funcional Components

const PrimeraApp = ({ saludo = "Hola mundo" }) => {
    // const saludo = "Hola mundo const";
    const persona = {
        nombre: "Erick",
        apellido: "Díaz",
    }
    // Para definir a que otros me envíen la propiedad de saludo a este componente, debo de usar prop-types
    return <>
        <h1>{saludo}</h1>
        {/* permite imprimir un objeto con Json.stringify */}
        <pre>{JSON.stringify(persona, null, 3)}</pre>
        <p>Mi primera App</p>
    </>
}

PrimeraApp.propTypes = {
    // defino que saludo sea de tipo string y que sea requerido
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;