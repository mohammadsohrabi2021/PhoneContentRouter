import React, { useState } from 'react';
import FormToDo from './FormLogin';
import ToDoCard from './ToDoCard';
const Form = () => {
  const [todos, setTodos] = useState([
    { user: Math.floor(Math.random() * 1000), name: "mohammad", lastName: "sohrabi", phone: "09186333667", age: 21, Country: "iran", City: "hamedan", email: "mohammadsohrabi141@gmail.com" ,state:'unfavoriteData'},
    { user: Math.floor(Math.random() * 1000), name: "ali", lastName: "sohrabi", phone: "09186333667", age: 21, Country: "iran", City: "hamedan", email: "mohammadsohrabi141@gmail.com" ,state:'unfavoriteData'},
    { user: Math.floor(Math.random() * 1000), name: "reza", lastName: "sohrabi", phone: "09186333667", age: 21, Country: "iran", City: "hamedan", email: "mohammadsohrabi141@gmail.com",state:'favoriteData' },
    { user: Math.floor(Math.random() * 1000), name: "milad", lastName: "sohrabi", phone: "09186333667", age: 21, Country: "iran", City: "hamedan", email: "mohammadsohrabi141@gmail.com" ,state:'favoriteData'},
    { user: Math.floor(Math.random() * 1000), name: "mohammad", lastName: "sohrabi", phone: "09186333667", age: 21, Country: "iran", City: "hamedan", email: "mohammadsohrabi141@gmail.com" ,state:'unfavoriteData'},
  ])
  const [form, setForm] = useState({ name: '', lastName: '', phone: '', age: '', Country: '', City: '', email: '' })
  const [FormStatus, setFormStatus] = useState('add')



  const handleSubmit = event => {
    event.preventDefault()
    if (FormStatus === 'add') {
      setTodos([...todos, {user: Math.floor(Math.random() * 1000), name: form.name, lastName: form.lastName, phone: form.phone, age: form.age, Country: form.Country, City: form.City, email: form.email }])
    }
    else {
      setTodos(todos.map(todo => todo.user === form.user ? form : todo))
    }
    setForm({ name: '', lastName: '', phone: '', age: '', Country: '', City: '', email: '' })
    setFormStatus('add')
  }
  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <FormToDo handleChange={handleChange} handleSubmit={handleSubmit} form={form} formStatus={FormStatus} setForm={setForm} setTodos={setTodos} todos={todos} setFormStatus={setFormStatus} />
      <ToDoCard  todos={todos} setForm={setForm} setFormStatus={setFormStatus} setTodos={setTodos} />
    </div>
  );
};

export default Form;