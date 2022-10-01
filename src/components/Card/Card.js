import React from 'react';
const Card = ({ handelCheck, todo, Styles, handleUpdate, handeleDelete }) => {
    return (
        <div className={Styles.container}>
            <div class="row g-0 border rounded-2 m-3 ">
                <div className={Styles.Avatar} >
                    <img src={`https://avatars.dicebear.com/api/avataaars/:${todo.user}.svg`} alt="avatar"/>
                </div>
                <div class="col-md-8 py-5">
                    <div class="card-body ">
                        <div class="card">
                            <div className={Styles.Card}>
                                <div class='LongHairFroBand' className={Styles.itemCard}>
                                    <h5>user:{todo.user}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5>name : {todo.name}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5>lastName:{todo.lastName}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5> phone:{todo.phone}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard} onClick={() => handelCheck(todo.user)} style={{ cursor: 'pointer' }}>
                                    <h5>state:{todo.state ? ' Inactive ' : ' active '}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5>age:{todo.age}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5> Country:{todo.Country}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5>City:{todo.City}</h5>
                                </div>
                                <div class="card-body" className={Styles.itemCard}>
                                    <h5> Email:<br />{todo.email}</h5>
                                </div>
                                <div className={Styles.button}>
                                    <button class=" btn btn-danger my-3" onClick={() => handeleDelete(todo.user)}>
                                        delete
                                    </button>
                                    <button class="btn btn-primary m-3" onClick={() => handleUpdate(todo)}>
                                        upDate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;