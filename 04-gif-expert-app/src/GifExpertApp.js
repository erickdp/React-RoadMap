// shortcut para la creación de componente y exportación del mismo rafce

import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertAPP = () => {

    const [categorias, setCategorias] = useState(["SNK"])

    return (
        <>
            <h2>GifExpertAPP</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />

            <ol>
                {categorias.map(categoria => (
                    <GifGrid
                        key={categoria}
                        categoria={categoria}
                    />
                ))}
            </ol>
        </>
    )
}

export default GifExpertAPP;