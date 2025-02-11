import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "juanjo101619@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState, 
      [name]: value 
    });
  };

  // Es mejor tener varios useEffect que uno solo con muchas 
  // dependencias, ya que se ejecutaría cada vez que una de las
  // dependencias cambie. 
  // 
  // El primer argumento de useEffect es una 
  // función que se ejecutará cuando el componente se monte o actualice.
  // 
  // El segundo argumento es un arreglo de dependencias que le dice
  // a React cuándo debe ejecutar la función.
  useEffect(() => { 
    //console.log("Hey!");
  },[]);
  
  useEffect(() => { 
    //console.log("formState change!");
  },[formState]);

  useEffect(() => { 
    //console.log("email change!");
  },[email]);

  return (
    <>
      <h1>Formulario Simple</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      { (username === "strider2") && <Message /> }
    </>
  );
};
