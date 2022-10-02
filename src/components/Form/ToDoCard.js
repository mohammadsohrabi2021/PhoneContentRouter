import React from 'react';
import { useState, useRef } from "react";
import Styles from "./ToDoCard.module.css";
import Dialog from './Dialog';
import Search from "../Search/Search"
import Filter from '../Filter/Filter';
import Card from './Card';
const filterData = [
    { id: 1, title: 'allData' },
    { id: 2, title: 'favoriteData' },
    { id: 3, title: 'unfavoriteData' },
]
const ToDoCard = ({  todos, setTodos, setFormStatus, setForm }) => {
    const [dialog, setDialog] = useState({
        message: "",
        isLoading: false,
        //Update
        nameProduct: ""
    });
    const idProductRef = useRef();
    const handleDialog = (message, isLoading, nameProduct) => {
        setDialog({
            message,
            isLoading,
            //Update
            nameProduct
        });
    };



    const handeleDelete = user => {
      
        const index = todos.findIndex((todo) => todo.user === user);
        handleDialog("Are you sure you want to delete?", true, todos[index].name);
        idProductRef.current = user;
    }
    const areUSureDelete = (choose) => {
        if (choose) {
               setTodos(todos.filter(todo => todo.user !== idProductRef.current))
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    };

    const handelCheck = user => {
        setTodos(todos.map(todo => todo.user === user ? { ...todo, state: !todo.state } : todo))
    }
    const handleUpdate = todo => {
        setFormStatus('upDate')
        setForm(todo)
    }
    // search
    const[search , setSearch]=useState('')
     const handleSearch = e =>{
        setSearch(e.target.value)
     }

    //  filter
    const [filter, setFilter] = useState('allData')
    return (
        <div key={Math.random()}>
           <Search handleSearch={handleSearch} search={search}/>
           <Filter filterData={filterData} setFilter={setFilter}/>
            {todos.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase()) && (filter === 'allData' ? true : todo.state === filter)).map(todo => (
            <Card todo={todo} Styles={Styles} handelCheck={handelCheck} handeleDelete={handeleDelete} handleUpdate={handleUpdate}/>
        ))} 
            {dialog.isLoading && (
                <Dialog
                    //Update
                    nameProduct={dialog.nameProduct}
                    onDialog={areUSureDelete}
                    message={dialog.message}
                />
            )}
        </div>
    );
};

export default ToDoCard;