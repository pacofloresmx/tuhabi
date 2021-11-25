import React from 'react';
import './style.css'

export const InfoText = ({label, value}) => {

    return (
        <div className="info-text">
            <span className="label">{label}</span>
            <span className="value">{value}</span>
        </div>
    );

}