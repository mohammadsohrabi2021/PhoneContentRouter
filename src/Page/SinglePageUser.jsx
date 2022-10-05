import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Styles from './SinglePage.module.scss'
const SinglePageUser = ({ todos }) => {

    const [contact, setContact] = useState({})
    const { user } = useParams()
    useEffect(() => {
        setContact(todos.filter(item => item.user === Number(user))[0])
    }, [])

    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div className={Styles.container}>
                <Link to={'/'}>
                    <button className='btn btn-primary'>
                        <i class="fa-solid fa-arrow-left"></i> Home
                    </button>
                </Link>
                <div class="row g-0 border rounded-2 m-3 ">
                    <div className={Styles.Avatar} >
                        <img style={{ width: '100' }} src={`https://avatars.dicebear.com/api/avataaars/:${contact.user}.svg`} alt="avatar" />
                    </div>
                    <div className={Styles.Card}>
                        <div className={Styles.itemCard}>
                            <h5>user : {contact.user}</h5>
                        </div>
                        <div class="card-body" className={Styles.itemCard}>
                            <h5>name : {contact.name}</h5>
                        </div>
                        <div class="card-body" className={Styles.itemCard}>
                            <h5>lastName : {contact.lastName}</h5>
                        </div>
                        <div class="card-body" className={Styles.itemCard}>
                            <h5> phone : {contact.phone}</h5>
                        </div>
                        <div class="card-body" className={Styles.itemCard} style={{ cursor: 'pointer' }}>
                            <h5>state : {contact.state ?  <i class="fa-solid fa-heart text-danger" ></i> : <i  class="fa-regular fa-heart " ></i>}</h5>
                        </div>
                        <div class="card-body" className={Styles.itemCard}>
                            <h5>age : {contact.age}</h5>
                        </div>
                        <div class="card-body" className={Styles.itemCard}>
                            <h5> Country : {contact.Country}</h5>
                        </div>
                        <div class="card-body" className={Styles.itemCard}>
                            <h5>City : {contact.City}</h5>
                        </div>
                        <div class="card-body" className={Styles.itemCard}>
                            <h5> Email :<br />{contact.email}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SinglePageUser;