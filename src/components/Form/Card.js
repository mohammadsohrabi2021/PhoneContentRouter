import React from 'react';
const Card = ({ handelCheck, todo, handleUpdate, handeleDelete }) => {
    return (
        <div>
            <div>
                <div>
                    <img src={`https://avatars.dicebear.com/api/avataaars/:${todo.user}.svg`} alt="avatar"/>
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <h5>user:{todo.user}</h5>
                                </div>
                                <div>
                                    <h5>name : {todo.name}</h5>
                                </div>
                                <div>
                                    <h5>lastName:{todo.lastName}</h5>
                                </div>
                                <div>
                                    <h5> phone:{todo.phone}</h5>
                                </div>
                                <div onClick={() => handelCheck(todo.user)} style={{ cursor: 'pointer' }}>
                                    <h5>state:{todo.state ? ' Inactive ' : ' active '}</h5>
                                </div>
                                <div>
                                    <h5>age:{todo.age}</h5>
                                </div>
                                <div>
                                    <h5> Country:{todo.Country}</h5>
                                </div>
                                <div>
                                    <h5>City:{todo.City}</h5>
                                </div>
                                <div>
                                    <h5> Email:<br />{todo.email}</h5>
                                </div>
                                <div>
                                    <button onClick={() => handeleDelete(todo.user)}>
                                        delete
                                    </button>
                                    <button onClick={() => handleUpdate(todo)}>
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