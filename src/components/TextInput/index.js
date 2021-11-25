import React from "react";
import { FormInput } from "shards-react";

export const TextInput = (props) => {
    const {
        label,
        name,
        className,
        placeholder
    } = props;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        props.onChange && props.onChange(name, value);
    }

    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <FormInput type="text" className={(className) ? `form-control ${className}` : 'form-control' } id={name} name={name} placeholder={placeholder} onChange={handleOnChange}/>
        </div>
    );
};