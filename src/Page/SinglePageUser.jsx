import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './SinglePage.module.scss'
const SinglePageUser = ({ todos }) => {

    const [contact, setContact] = useState({})
    const { user } = useParams()
    useEffect(() => {
        setContact(todos.filter(item => item.user === Number(user))[0])
    }, [])

    return (
        <div  className={styles.container}>
            <div>
                <h5>
                    <img style={{ width: '50px' }} src={`https://avatars.dicebear.com/api/avataaars/:${contact.user}.svg`} alt="avatar" />
                </h5>
            </div>
            <div  className={styles.containerCard}>
                <div >
                    <h5>user: {contact.user}</h5>
                </div>
                <div>
                    <h5>Name: {contact.name}</h5>
                </div>
                <div>
                    <h5>lastName: {contact.lastName}</h5>
                </div>
                <div>
                    <h5>phone: {contact.phone}</h5>
                </div>
                <div>
                    <h5>state: {contact.state ? ' Inactive ' : ' active '}</h5>
                </div>
                <div>
                    <h5>Age: {contact.age}</h5>
                </div>
                <div>
                    <h5>Country: {contact.Country}</h5>
                </div>
                <div >
                    <h5>City: {contact.City}</h5>
                </div>
                <div>
                    <h5>Email: {contact.email}</h5>
                </div>
            </div>
            <Link to={'/'}>
                <button className='btn btn-primary'>
                    <i class="fa-solid fa-arrow-left"></i>Home
                </button>
            </Link>

        </div>

    );
};

export default SinglePageUser;