import React,{useState} from 'react';
import "./App.css"
import Home from './components/Home/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Form from './components/Form/Form';
import { DataForm } from './components/Data/Data';
import SinglePageUser from './Page/SinglePageUser';


const App =()=> {
   //start data card
   const [todos, setTodos] = useState(DataForm)
   // ende data card
   const [form, setForm] = useState({ name: '', lastName: '', phone: '', age: '', Country: '', City: '', email: '' })
  const [FormStatus, setFormStatus] = useState('add')
   
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Home  todos={todos} setTodos={setTodos} setForm={setForm} setFormStatus={setFormStatus}/>,
    },
    {
        path: "/Form",
        element: <Form  setTodos={setTodos} todos={todos} form={form}setForm={setForm} setFormStatus={setFormStatus} FormStatus={FormStatus}/>,
    },
    {
      path: "/contacts/:user",
      element: <SinglePageUser  todos={todos}  />,
  },
  ]);
  
    return (
      <RouterProvider router={router} />
    );

}

export default App;