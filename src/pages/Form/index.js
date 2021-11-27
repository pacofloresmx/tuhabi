import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button, Modal } from "shards-react";
import { Stepper } from '../../components/Stepper';
import { Summary } from '../../components/Summary';
import './style.css'
import { PropertyContext } from '../../contexts/PropertyContext';

export const Form = () => {
    const {data, setData, labels, steps, saveData} = useContext(PropertyContext);
    const [open, setOpen] = useState(false);
    const history = useHistory();

    useEffect(() => {
        console.log(data);
        saveData(data);
    }, [data, saveData])

    const handleChange = (name, value) => {
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submit = () => {
        history.push('/summary');
    };

    const toggleModal = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <div className="container main-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-l9 left-container">
                        <div className="stepper-container">
                            <form>
                                <Stepper steps={steps} endAction={submit} status={false}>
                                {
                                    steps.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        render={
                                            (props) => (
                                                <React.Fragment>
                                                    <route.component
                                                        defaultValue={('name' in route.componentProps && 'val' in route.componentProps) && route.componentProps.val(data)}
                                                        data={data}
                                                        onChange={(name, value) => {
                                                            handleChange(name, value);
                                                        }}
                                                        {...props}
                                                        {...route.componentProps}
                                                    />
                                                </React.Fragment>
                                            )
                                        }
                                    />
                                    ))
                                }
                                </Stepper>
                            </form>
                            <div className="buttons-container">
                                <Button className="full-width-button" onClick={toggleModal}>Resumen</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-l3 right-container">
                        <Summary data={data} labels={labels} />
                    </div>
                </div>
            </div>
            <Modal open={open} toggle={toggleModal}>
                <Summary data={data} labels={labels}/>
            </Modal>
        </React.Fragment>
    );

}