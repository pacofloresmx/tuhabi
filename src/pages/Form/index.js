import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Button, Modal } from "shards-react";
import { Stepper } from '../../components/Stepper';
import { Summary } from '../../components/Summary';
import { useFormik } from 'formik';
import * as yup from "yup";
import steps from '../../contexts/StepperContext/steps';
import './style.css'

export const Form = ({children}) => {
    const [open, setOpen] = useState(false);

    const [data, setData] = useState({
        name: '',
        address: '',
        email: '',
        floorNumber: '',
        lift: '',
        parking: '',
        photo: '',
        price: '',
        services: {
            zonaBBQ: false,
            salonComunal: false,
            parqueJuegos: false
        }
    });

    const labels = {
        name: 'Nombre completo',
        address: 'Dirección',
        email: 'Email',
        floorNumber: 'Número de piso',
        lift: '¿Tiene elevador?',
        parking: '¿Tiene estacionamiento?',
        photo: 'Fotografía',
        price: 'Precio',
        services: 'Servicios',
        zonaBBQ: 'Zona BBQ',
        salonComunal: 'Salon Comunal',
        parqueJuegos: 'Parque de Juegos'
    }

    const handleChange = (name, value) => {
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const formik = useFormik({
        initialValues: {...data},
        validationSchema: yup.object().shape({
            name: yup.string().required('Campo obligatorio'),
            address: yup.string().required('Campo obligatorio'),
            email: yup.string().required('Campo obligatorio'),
            floorNumber: yup.string().required('Campo obligatorio'),
            lift: yup.string().required('Campo obligatorio'),
            parking: yup.string().required('Campo obligatorio'),
            photo: yup.string().required('Campo obligatorio'),
            price: yup.string().required('Campo obligatorio'),
            services: yup.string().required('Campo obligatorio')
        }),
        onSubmit: async (values) => {
            console.log(values);
        }
    });

    const toggleModal = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <div className="container main-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-l9 left-container">
                        <div className="stepper-container">
                            <Stepper formik={formik}>
                            {
                                steps.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    render={
                                        (props) => (
                                            <route.component
                                                onChange={(name, value) => {
                                                    handleChange(name, value);
                                                    formik.setFieldValue(name, value);
                                                }}
                                                {...props}
                                                {...route.componentProps}
                                            />
                                        )
                                    }
                                />
                                ))
                            }
                            </Stepper>
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