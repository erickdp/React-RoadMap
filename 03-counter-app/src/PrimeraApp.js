import PropTypes from "prop-types";
// Funcional Components

const PrimeraApp = ({ saludo, subtitulo }) => {
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
        <p>{subtitulo}</p>
    </>
}

PrimeraApp.propTypes = {
    // defino que saludo sea de tipo string y que sea requerido
    saludo: PropTypes.string.isRequired
}

// Para definir valores de los pros por defecto
PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtítulo"
}

export default PrimeraApp;