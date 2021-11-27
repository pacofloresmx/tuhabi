import React, { useState } from "react";
import { FormCheckbox } from "shards-react";

export const OptionInput = (props) => {
    const {
        label,
        name,
        onChange,
        defaultValue
    } = props;

    let opts = {};
    let optionsConfig = Object.keys(props.optionsConfig).map((key) => {
        let {
            name,
            label
        } = props.optionsConfig[key];
        let value = props.optionsConfig[key]['val'](props.data);
        opts[name] = value;
        return {name, label, value};
    });

    console.log(optionsConfig);

    const [options, setOptions] = useState(opts);

    const handleChange = (opt) => {
        const newState = {};
        newState[opt] = !options[opt];
        setOptions({ ...options, ...newState });
        if (onChange) {
            name ? onChange(name, { ...options, ...newState }) : onChange(opt, newState[opt])
        }
    }

    return (
        <div className="">
            {label && <label className="form-label">{label}</label>}
            {
                optionsConfig.map((option, index) => (
                    <FormCheckbox
                        key={index}
                        checked={defaultValue ? defaultValue[option.name] : options[option.name]}
                        onChange={() => {handleChange(option.name);}}
                    >
                    {option.label}
                    </FormCheckbox>
                ))
            }
        </div>
    );

};