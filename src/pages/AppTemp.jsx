import { useEffect, useState } from "react"
import { useTemp } from "../hooks/useTemp"
import { useModoOscuro } from "../hooks/useModoOscuro"


export const AppTemp = () => {

    const { tiempo, activo, milisegundos, detener, iniciar, reiniciar } = useTemp()

    const { modoOscuro, toggleModoOscuro } = useModoOscuro()


    return (
        <>

            <div className="container">
                <div className="nav">
                    <h1>Temporizador:</h1>
                    <button
                        type="button"
                        className="btn btn-outline-info"
                        onClick={toggleModoOscuro}>
                        {modoOscuro ? "Modo Claro" : "Modo Oscuro"}
                    </button>
                </div>
                <hr />
                <div className="container2">

                    <div>
                        <h3>Tiempo: {tiempo} s {milisegundos < 10 ? '0' + milisegundos : milisegundos} ms</h3>
                        <button type="button" className="btn btn-outline-danger" onClick={detener}>Detener</button>
                        <button type="button" className="btn btn-outline-success" onClick={iniciar}>Iniciar</button>

                        <button type="button" className="btn btn-outline-secondary" onClick={reiniciar}>Reiniciar</button>
                    </div>


                </div>
            </div>


        </>
    )
}
