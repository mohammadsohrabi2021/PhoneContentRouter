import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Form.module.scss'
const Form = ({ setTodos, todos, form, setForm, setFormStatus, FormStatus }) => {
    const back = useNavigate();
    //  start  code form
    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const handleSubmit = event => {
        back('/')
        event.preventDefault()
        if (FormStatus === 'add') {
            setTodos([...todos, { user: Math.floor(Math.random() * 1000), name: form.name, lastName: form.lastName, phone: form.phone, age: form.age, Country: form.Country, City: form.City, email: form.email }])
        }
        else {
            setTodos(todos.map(todo => todo.user === form.user ? form : todo))
        }
        setForm({ name: '', lastName: '', phone: '', age: '', Country: '', City: '', email: '' })
        setFormStatus('add')
    }
    // ende code form


    return (
        <div className={styles.container}>
            <div className={styles.containerForm}>
                <Link to={`/`} className={styles.iconBack}>
                    <i class="fa-solid fa-arrow-left"></i>
                </Link>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <lable htmlFor={'name'}>Name:*</lable>
                    <input type='text' id='name' name='name' value={form.name} onChange={handleChange} placeholder='Mohammad' />
                    <lable htmlFor={'lastName'}>lastName:*</lable>
                    <input type='text' id='lastName' name='lastName' value={form.lastName} onChange={handleChange} placeholder='Sohrabi' />
                    <lable htmlFor={'phone'}>Phone:*</lable>
                    <input type='number' id='phone' name='phone' value={form.phone} onChange={handleChange} placeholder='0918xxxxxxx' />
                    <lable htmlFor={'City'}>City:*</lable>
                    <input type='text' id='City' name='City' value={form.City} onChange={handleChange} placeholder='Hamedan' />
                    <lable htmlFor={'Country'}>Country:*</lable>
                    <input type='text' id='Country' name='Country' value={form.Country} onChange={handleChange} placeholder='Iran' />
                    <lable htmlFor={'email'}>Email:*</lable>
                    <input type='email' id='email' name='email' value={form.email} onChange={handleChange} placeholder='Ms@gmail.com' />
                    <lable htmlFor={'age'}>age:*</lable>
                    <input type='number' id='age' name='age' value={form.age} onChange={handleChange} placeholder='21' />

                    <button type='submit' onClick={handleSubmit} className='btn btn-success my-3' >
                        {FormStatus === 'add' ? 'submit' : 'update'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;