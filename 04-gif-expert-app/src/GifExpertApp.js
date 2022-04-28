// shortcut para la creación de componente y exportación del mismo refce

import { useState } from "react";

const GifExpertAPP = () => {

    //  const categorias = ["One Punch", "Samurai X", "Dragaon Ball"];

    const [categorias, setCategorias] = useState(["One Punch", "Samurai X", "Dragaon Ball"])

    const handleAdd = () => {
        setCategorias([...categorias, "HunterXHunter"]); // primera solucion
        // setCategorias(cats => [...cats, "HunterXHunter"]) // segunda solución toma el estado anterior con callback
    }

    return (
        <>
            <h2>GifExpertAPP</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {categorias.map(categoria => <li key={categoria}>{categoria}</li>)}
            </ol>
        </>
    )
}

export default GifExpertAPP;