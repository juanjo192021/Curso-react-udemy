import { useState } from "react";

export const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const {counter1, counter2, counter3} = state;

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>

      <hr />

      // Preservamos el estado anterior ( counter2 = 20 y counter3 = 30 ) al usar ...state y solo modificamos el valor de counter1
      <button 
        className="btn btn-primary" 
        onClick={ 
          () => setState({
            ...state,
            counter1: counter1 + 1
          })
        }>+1</button>
    </>
  )
}
