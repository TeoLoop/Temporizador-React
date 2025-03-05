import React, { useEffect, useState } from 'react'

export const useTemp = () => {

    const [tiempo, setTiempo] = useState(0)

    const [milisegundos, setMilisegundos] = useState(0)

    const [activo, setActivo] = useState(false)

    const detener = () => {
        setActivo(false)
    }

    const iniciar = () => {
        setActivo(true)
    }

    const reiniciar = () => {
        setTiempo(0)
        setMilisegundos(0)
        setActivo(false)
    }

    useEffect(() => {
        let intervalo
        if (activo) {
            intervalo = setInterval(() => {
                setMilisegundos ((prevMilisegundos) => {
                    if (prevMilisegundos === 99) {
                        return 0
                    } else {
                        return prevMilisegundos + 1;
                    }
                })

            }, 10);
        } else {
            clearInterval(intervalo) //si no esta activo limpia el intervalo
        }

        return () =>{
            clearInterval(intervalo)

        }

    }, [activo])
    

    useEffect(() => {
        // si el temporizador esta activo
        let intervalo
        if (activo) {
            intervalo = setInterval(() => {
                setTiempo((prevTiempo) => prevTiempo + 1) // aumenta el tiempo cada segundo
            }, 1000);
        } else{
            clearInterval(intervalo) //si no esta activo limpia el intervalo
        }

        // Limpiar el intervalo cuando el componente se desmonte o cuando 'activo' cambie
        return () =>{
            clearInterval(intervalo)

        }
    }, [activo]) //SOLO SE EJECUTA CUANDO ESTE ACTIVO



  return {
    tiempo,
    activo,
    milisegundos,
    reiniciar,
    detener,
    iniciar
  }
}
