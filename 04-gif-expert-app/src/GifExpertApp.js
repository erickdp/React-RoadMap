// shortcut para la creación de componente y exportación del mismo rafce

import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertAPP = () => {

    //  const categorias = ["One Punch", "Samurai X", "Dragaon Ball"];

    const [categorias, setCategorias] = useState(["One Punch", "Samurai X", "Dragaon Ball"])

    // const handleAdd = () => {
    //     setCategorias([...categorias, "HunterXHunter"]); // primera solucion
    //     // setCategorias(cats => [...cats, "HunterXHunter"]) // segunda solución toma el estado anterior con callback
    // }

    return (
        <>
            <h2>GifExpertAPP</h2>
            <AddCategory />
            <hr/>

            <ol>
                {categorias.map(categoria => <li key={categoria}>{categoria}</li>)}
            </ol>
        </>
    )
}

export default GifExpertAPP;