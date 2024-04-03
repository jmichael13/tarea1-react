import { useState } from "react"

export const TaskList = (tasks) => {
    const { id, text, completed } = tasks
   
    return (
        <div>
            <div className="cardTareas">
                <p>Tarea {id}</p>
                <p>{text}</p>
                <p>{completed === true? <mark>Terminado</mark>: "Falta"}</p>
                
            </div>
        </div>

    )
}