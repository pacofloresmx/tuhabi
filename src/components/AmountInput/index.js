import React, { useState } from 'react';

import './style.css';

import NumberFormat from 'react-number-format';

export const AmountInput = (props) => {
    const {
        label,
        name,
        className,
        defaultValue
    } = props;

    const [currentValue, setCurrentValue] = useState(defaultValue ? defaultValue : 0);

    const unformatNumber = (str) => {
        return str.replace('$', '').replaceAll(',', '');
    }

    const handleChange = (event) => {
        const rawValue = event.target.value;
        setCurrentValue();
        const formattedValue = Number(unformatNumber(rawValue));
        props.onChange && props.onChange(name, formattedValue);
    }

    return (
        <React.Fragment>
            <div className="mb-3 number-input-container">
                <label htmlFor={name} className="form-label">{label}</label>
                <NumberFormat
                    name={name}
                    value={currentValue}
                    onChange={handleChange}
                    className={className ? `number-input ${className}` : 'number-input'}
                    prefix="$"
                    displayType="input"
                    type="text"
                    thousandSeparator={true}
                    allowNegative={false}
                    allowLeadingZeros={false}
                    onBlur={(e) => {props.onBlur && props.onBlur(e)}}
                />
            </div>
            {props.message && <span className="form-control-message">{props.message}</span>}
        </React.Fragment>
    );
}