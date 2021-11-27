import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { Button } from "shards-react";

import './style.css'

export const CounterInput = (props) => {
    const {
        label,
        name,
        defaultValue,
        onChange
    } = props;

    const [count, setCount] = useState(defaultValue ? defaultValue : 0);
    const min = (props.min) ? props.min : 0;
    const max = (props.max) ? props.max : 100;

    const decrement = () => {
        if (count > min) {
            setCount(count-1);
            handleChange(count-1);
        }
    }

    const increment = () => {
        if (count < max) {
            setCount(count+1);
            handleChange(count+1);
        }
    }

    const handleChange = (value) => {
        onChange && onChange(name, value);
    }

    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <div className="count-container">
                <Button onClick={decrement} disabled={(count === min)}>-</Button>
                <NumberFormat
                    type="text"
                    min={0}
                    max={10}
                    name={name}
                    value={count}
                    allowLeadingZeros={false}
                    disabled
                    className={props.className ? `counter-input ${props.className}` : 'counter-input'}
                    decimalSeparator={false}
                    thousandSeparator={""}
                    allowNegative={false}
                />
                <Button onClick={increment} disabled={(count === max)}>+</Button>
            </div>
        </div>
    );

};