import React from "react";
import CounterInput from "react-counter-input";

export const CustomCounterInput = (props) => {
    const {
        label,
        name
    } = props;

    const handleOnChange = (count) => {
        props.onChange && props.onChange(name, count);
    }

    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <CounterInput
                min={0}
                max={10}
                onCountChange={handleOnChange}
            />
        </div>
    );

};