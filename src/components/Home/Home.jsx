import React from 'react';
import { Link } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import { useState, useRef } from "react";
import Card from '../Card/Card';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
const Home = ({ todos, setTodos, setForm, setFormStatus }) => {
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

    const areUSureDelete = (choose) => {
        if (choose) {
            setTodos(todos.filter(todo => todo.user !== idProductRef.current))
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    };
    // search
    const [search, setSearch] = useState('')
    //  filter
    const [filter, setFilter] = useState('allData')
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <Search search={search} setSearch={setSearch} />
                <Filter setFilter={setFilter} />
                {todos.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase()) && (filter === 'allData' ? true : todo.state === filter)).map(todo => (
                    <Card todo={todo} setForm={setForm} setFormStatus={setFormStatus} todos={todos} setTodos={setTodos} handleDialog={handleDialog} idProductRef={idProductRef} />
                ))}


                <Link to={`/Form`}>
                    <button>ADD USER</button>
                </Link>
            </div>

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

export default Home;