import React, { useEffect, useState } from 'react'

export const useModoOscuro = () => {

    const [modoOscuro, setModoOscuro] = useState(false)

    const toggleModoOscuro = () => {
        setModoOscuro(!modoOscuro)
    }

    useEffect(() => {
        if (modoOscuro) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [modoOscuro])

  return {
    modoOscuro,
    toggleModoOscuro
  }
}
