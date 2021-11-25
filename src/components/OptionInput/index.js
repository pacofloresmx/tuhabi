import React, { useEffect, useState } from "react";
import { FormCheckbox } from "shards-react";

export const OptionInput = (props) => {
    const {
        label,
        name,
        onChange
    } = props;

    let opts = {};
    let optionsConfig = Object.keys(props.optionsConfig).map((key) => {
        let {
            name, 
            value,
            label
        } = props.optionsConfig[key];
        opts[name] = value;
        return {name, label, value};
    });

    const [options, setOptions] = useState(opts);

    const handleChange = (opt) => {
        const newState = {};
        newState[opt] = !options[opt];
        setOptions({ ...options, ...newState });
        onChange && onChange(name, { ...options, ...newState })
    }

    return (
        <div className="">
            <p>{label}</p>
            {
                optionsConfig.map((option, index) => (
                    <FormCheckbox
                        key={index}
                        checked={options[option.name]}
                        onChange={() => {handleChange(option.name);}}
                    >
                    {option.label}
                    </FormCheckbox>
                ))
            }
        </div>
    );

};