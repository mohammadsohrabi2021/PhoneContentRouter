import React from 'react';
import { Link } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import { useState, useRef } from "react";
import Card from '../Card/Card';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import styles from './Home.module.scss'
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
            <div className={styles.navbar}>
                <h5>Mohammad Sohrabi</h5>
                <Search search={search} setSearch={setSearch} />
                <Link to={`/Form`}>
                    <button>
                        <i class="fa-regular fa-user"></i>+ Add User
                    </button>
                </Link>
            </div>
            <div>
                <Filter setFilter={setFilter} />
            </div>
            <div>
                {todos.filter(todo => todo.name.toUpperCase().includes(search.toUpperCase()) && (filter === 'allData' ? true : todo.state === filter)).map(todo => (
                    <Card todo={todo} setForm={setForm} setFormStatus={setFormStatus} todos={todos} setTodos={setTodos} handleDialog={handleDialog} idProductRef={idProductRef} />
                ))}
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