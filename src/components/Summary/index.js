import React, { useContext } from 'react';
import { PropertyContext } from '../../contexts/PropertyContext';
import { InfoText } from '../InfoText';
import './style.css'

export const Summary = () => {
    const {data, labels} = useContext(PropertyContext);

    const renderValue = (value) => {
        if (typeof value == "boolean") {
            return value ? 'Sí' : 'No';
        } else {
            return value ? value : '-';
        }
    }

    return (
        <div className="summary">
            {
                Object.keys(data).map((key) => (
                    (typeof data[key] === 'object') ? (
                        <React.Fragment key={key}>
                            <InfoText value={labels[key]}/>
                            {
                                Object.keys(data[key]).map((subkey) => (
                                    <InfoText
                                        key={subkey}
                                        label={labels[subkey]}
                                        value={renderValue(data[key][subkey])}
                                    />
                                ))
                            }
                        </React.Fragment>
                    ) : (
                        (key !== 'photo') ? 
                        <InfoText
                            key={key}
                            label={labels[key]}
                            value={renderValue(data[key])}
                        /> : 
                        <React.Fragment key={key}>
                            {
                                (data[key]) &&
                                <div
                                    className="image-container"
                                >
                                    <img src={data[key]} alt="" />
                                </div>
                            }
                        </React.Fragment>
                    )
                ))
            }
        </div>
    );

}