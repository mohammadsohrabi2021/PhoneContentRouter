import React from "react";
import Styles from "./Form.module.css";
const FormToDo = ({ form, FormStatus, handleSubmit, handleChange }) => {
    const FormLogin = [
        { name: 'name', type:'text', value: 'form.name', placeholder: 'mohammad' },
        { name: 'lastName', type:'text', value: 'form.lastName', placeholder: 'sohrabi' },
        { name: 'age', type:'number', value: 'form.age', placeholder: '21' },
        { name: 'Country', type:'text', value: 'form.Country', placeholder: 'Iran' },
        { name: 'phone', type:'number', value: 'form.phone', placeholder: '0918xxxxxxx' },
        { name: 'City', type:'text', value: 'form.City', placeholder: 'Hamedan' },
        { name: 'email', type:'email', value: 'form.email', placeholder: 'm@gmail.com' },
    ]
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset className={Styles.formLogin}>
                    <legend>login:</legend>
                    {FormLogin.map(item =>
                        <div>
                            <lable htmlFor={item.name}>{item.name}:</lable>
                            <input type={item.type} onChange={handleChange} name={item.name} value={item.value.name} placeholder={item.placeholder} required/>
                        </div>
                    )}
                    <button type={'submit'} style={{ width: '46%', height: "38px", marginTop: '34px' }}>
                        {FormStatus === 'add' ? 'update' : 'submit'}
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default FormToDo;