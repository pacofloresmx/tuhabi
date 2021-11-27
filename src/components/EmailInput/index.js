import React from "react";
import { FormInput } from "shards-react";

export const EmailInput = (props) => {
    const {
        label,
        name,
        className,
        placeholder,
        defaultValue
    } = props;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        props.onChange && props.onChange(name, value);
    }

    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <FormInput value={defaultValue} type="email" className={(className) ? `form-control ${className}` : 'form-control' } id={name} name={name} placeholder={placeholder} onChange={handleOnChange}/>
        </div>
    );

};