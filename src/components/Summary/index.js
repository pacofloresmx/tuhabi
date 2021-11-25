import React from 'react';
import { ImageHero } from '../ImageHero';
import { InfoText } from '../InfoText';
import './style.css'

export const Summary = ({labels, data}) => {

    return (
        <div className=" summary">
            <div className="image-container">
                <ImageHero></ImageHero>
            </div>
            {
                Object.keys(data).map((key) => (
                    (key !== 'photo' && key !== 'services') && <InfoText
                        key={key}
                        label={labels[key]}
                        value={(data[key]) ? (data[key]) : '-'}
                    />
                ))
            }
            <InfoText
                value="Servicios"
            />
            {
                Object.keys(data['services']).map((service) => (
                    <InfoText
                        key={service}
                        label={labels[service]}
                        value={(data['services'][service] === true) ? 'Sí' : 'No'}
                    />
                ))
            }
        </div>
    );

}