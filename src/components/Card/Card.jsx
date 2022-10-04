import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss'
const Card = ({ setForm, setFormStatus, setTodos, todos, handleDialog, idProductRef, todo }) => {
    const handeleDelete = user => {
        const index = todos.findIndex((todo) => todo.user === user);
        handleDialog("Are you sure you want to delete?", true, todos[index].name);
        idProductRef.current = user;
    }
    const handelCheck = user => {
        setTodos(todos.map(todo => todo.user === user ? { ...todo, state: !todo.state } : todo))
    }
    const handleUpdate = todo => {
        setFormStatus('upDate')
        setForm(todo)
    }

    return (
        <div className={styles.container}>
         
            <div className={styles.card}>
                <div>
                    <img style={{width:'50px'}} src={`https://avatars.dicebear.com/api/avataaars/:${todo.user}.svg`} alt="avatar" />
                </div>
                <div>
                    <h5>{todo.user}</h5>
                </div>
                <div>
                    <h5>{todo.name}</h5>
                </div>
                <div>
                    <h5>{todo.lastName}</h5>
                </div>
                <div>
                    <h5>{todo.phone}</h5>
                </div>
                <div onClick={() => handelCheck(todo.user)} style={{ cursor: 'pointer' }}>
                    <h5>{todo.state ? ' Inactive ' : ' active '}</h5>
                </div>
                <div>
                    <h5>{todo.age}</h5>
                </div>
                <div>
                    <h5>{todo.Country}</h5>
                </div>
                <div>
                    <h5>{todo.City}</h5>
                </div>
                <div>
                    <h5>{todo.email}</h5>
                </div>
                <div>
                    <button className='btn btn-danger m-3' onClick={() => handeleDelete(todo.user)}>
                        delete
                    </button>
                    <Link to={`/Form`}>
                        <button className='btn btn-success m-2' onClick={() => handleUpdate(todo)}>
                            upDate
                        </button>
                    </Link>
                </div>
            </div>
        </div>



    );
};

export default Card;