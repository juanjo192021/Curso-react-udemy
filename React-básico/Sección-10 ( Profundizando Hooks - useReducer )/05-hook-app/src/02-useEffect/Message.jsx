import React, { useEffect, useState } from 'react';

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x,y }) => {
      //const coords = { x, y };
      setCoords({ x, y });
    }
    
    window.addEventListener('mousemove', onMouseMove);
  
    // Este return es una forma de limpiar el efecto, es decir, 
    // de hacer una especie de "componentWillUnmount" para evitar
    // memory leaks.

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  // Si el segundo argumento es un arreglo vacío, el efecto se ejecutará
  // solo una vez, cuando el componente se monte, pero se puede ajustar
  // según el elemento o elementos que se deseen que tenga el efecto.
  }, [])
  

  return (
    <>
      <h3>Usuario ya existe</h3>
      {
        JSON.stringify(coords)
      }
    </>
  );
}
