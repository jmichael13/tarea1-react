import { Cuadrado } from "./Cuadrado"

export const ColorChanger =()=>{
    const pintar = "green"
    return(
        <div>
            <Cuadrado
            colorCuadrado={pintar}
            />
        </div>
    )
}