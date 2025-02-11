import { useState } from 'react'

export const useForm = ( initialForm = {} ) => {
  
  const [formState, setFormState] = useState(initialForm);
  
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // ...formState -> desestructura el objeto formState para 
    // mantener ciertos valores del formulario
    // [name]: value -> actualiza el valor del input que se
    // está modificando en este caso es el name del input
    setFormState({
      ...formState, 
      [name]: value 
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  }

  return { 
    ...formState,
    formState, 
    onInputChange ,
    onResetForm
  };
}
