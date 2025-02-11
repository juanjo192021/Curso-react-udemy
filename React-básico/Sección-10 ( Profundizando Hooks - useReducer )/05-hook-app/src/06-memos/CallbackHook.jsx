import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // El useCallback se utiliza para que la función no se vuelva a renderizar y retorna una función
  const incrementFather = useCallback(
    // Aquí se pone la función que se quiere que no se vuelva a renderizar
    // y como parametro lo que se desea enviar a la función
    (value) => {
      setCounter(c => c + value);
    },
    [],
  );
  
  /* const incrementFather = () => {
    setCounter(counter + 1);
  } */

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  )
}