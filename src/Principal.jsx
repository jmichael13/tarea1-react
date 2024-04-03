import { Navbar } from "./components/Navbar"
import { ColorChanger } from "./components/ColorChanger"
import './index.css'
import { tareas } from "./utils/tareas"
import { TaskList } from "./components/TaskList"
import { useState } from "react"


export const Principal = () => {

    return (
        <main>
            <Navbar />

            <h1>PREGUNTA 1</h1>
            <ColorChanger />

            <h1 style={{textAlign:"center"}}>PREGUNTA 2</h1>

            {
                tareas.map((tarea) => (
                    <TaskList
                        key={tarea.id}
                        id={tarea.id}
                        text={tarea.text}
                        completed={tarea.completed}
                    />
                ))
            }
        </main>

    )
}