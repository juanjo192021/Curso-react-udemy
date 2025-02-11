import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
//import { HooksApp } from './HooksApp.jsx'
//import { CounterApp } from './01-useState/CounterApp.jsx'
//import { CounterWithCustonHook } from './01-useState/CounterWithCustonHook.jsx'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp';

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <TodoApp />
  //</StrictMode>,
)
