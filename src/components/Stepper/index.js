import React, { useEffect, useState } from 'react';
import { Stepper as ReactStepper } from 'react-form-stepper';
import { useHistory, useParams } from 'react-router';
import { Button } from 'shards-react';

import './style.css'

export const Stepper = ({steps, children, endAction, status}) => {
    const { step } = useParams();
    const history = useHistory();

    const [activeStepIndex, setActiveStep] = useState();

    const next = () => {
        if ((activeStepIndex + 1) < steps.length) {
            setActiveStep(activeStepIndex + 1);
        }
    }

    const back = () => {
        if (0 < activeStepIndex) {
            setActiveStep(activeStepIndex - 1);
        }
    }

    useEffect(() => {
        let activeStep = steps.find(value => value.order === activeStepIndex);
        if (activeStep) {
            history.push(activeStep.path);
        }
    }, [activeStepIndex, history, steps]);

    useEffect(() => {
        let activeStep = steps.find(value => value.name === step);
        if (activeStep) {
            setActiveStep(activeStep.order);
        }
    }, [steps, step]);

    return (
        <div className="wrapper">
            <ReactStepper
                steps={steps.map((value, index)=>{return {index}})}
                activeStep={activeStepIndex}
                styleConfig={{
                    activeBgColor: '#0062cc',
                    completedBgColor: '#0062cc'
                }}
            />
            <div className="control-container">
                {children}
            </div>
            <div className="buttons-container">
                {(0 < activeStepIndex) && <Button onClick={back}>Atrás</Button>}
                <span/>
                {((activeStepIndex + 1) < steps.length) && <Button onClick={next}>Adelante</Button>}
                {((activeStepIndex + 1) === steps.length) && <Button onClick={() => endAction()}>Terminar</Button>}
            </div>
        </div>
    );
}