import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {

  const [todoId, settodoId] = useState(1)
  //const {data: todos = [], isLoading} = useGetTodosQuery();
  const {data: todo, isLoading} = useGetTodoQuery(1);

  const nextTodo = () => {
    settodoId( todoId + 1 );
  }

  const prevTodo = () => {

    if (todoId === 1) return;

    settodoId( todoId - 1 );
  }

  return (
    <>
      <h1>Todos - RKT Query</h1>
      <hr />

      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
      <pre>{JSON.stringify(todo, null,3)}</pre>
      <button onClick={prevTodo}>
        Prev Todo
      </button>
      <button onClick={nextTodo}>
        Next Todo
      </button>
      {/* <ul>
        {
          todos.map( todo => (
            <li key={todo.id}>
              <strong>{todo.completed ? 'DONE ': 'Pending '} </strong>
               {todo.title}
            </li>
          ))
        }
      </ul> */}
    </>
  );
};
