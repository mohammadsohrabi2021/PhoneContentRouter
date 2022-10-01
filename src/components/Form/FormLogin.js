import React from "react";
import Styles from "./Form.module.css";
const FormToDo = ({ form, FormStatus, handleSubmit, handleChange }) => {
    const FormLogin = [
        { name: 'name', value: 'form.name', placeholder: 'mohammad' },
        { name: 'lastName', value: 'form.lastName', placeholder: 'sohrabi' },
        { name: 'age', value: 'form.age', placeholder: '21' },
        { name: 'Country', value: 'form.Country', placeholder: 'Iran' },
        { name: 'phone', value: 'form.phone', placeholder: '0918xxxxxxx' },
        { name: 'City', value: 'form.City', placeholder: 'Hamedan' },
        { name: 'email', value: 'form.email', placeholder: 'm@gmail.com' },
    ]
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset className={Styles.formLogin}>
                    <legend>login:</legend>
                    {FormLogin.map(item =>
                        <div>
                            <lable htmlFor={item.name}>{item.name}:</lable>
                            <input type={'name'} onChange={handleChange} name={item.name} value={item.form} placeholder={item.placeholder} />
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