import React from 'react';
import './style.css'

export const ImageHero = ({children}) => {

    return (
        <div className="hero-image">
            <div className="hero-content">
                {children}
            </div>
        </div>
    );

}