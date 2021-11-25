import React, { useState } from 'react';
import PropTypes from 'prop-types';
import steps from './steps';

const StepperContext = React.createContext();

const StepperProvider = ({children}) => {
    const [activeStep, setActiveStep] = useState(0);

    const next = () => {
        setActiveStep(activeStep+1);
    }

    const back = () => {
        setActiveStep(activeStep-1);
    }

    return (
        <StepperContext.Provider value={{
            activeStep,
            setActiveStep,
            steps,
            next,
            back
        }}>
            {children}
        </StepperContext.Provider>
    );
}

StepperProvider.propTypes = {
    children: PropTypes.node
};

export { StepperContext, StepperProvider };
