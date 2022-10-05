import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Card from '../components/Card/Card'
const SinglePageUser = ({setForm,setFormStatus,todos,setTodos}) => {
    const [contact, setContact] = useState({})
    const {contactId} = useParams()
    useEffect(() => {
        setContact(todos.filter(item => item.user.toString() === contactId))
    }, [])
    
    return (
        <div>
            <Card  setForm={setForm} setFormStatus={setFormStatus} todos={todos} setTodos={setTodos}  />
        </div>
    );
};

export default SinglePageUser;