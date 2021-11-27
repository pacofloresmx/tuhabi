import { TextInput } from "../../components/TextInput";
import { EmailInput } from "../../components/EmailInput";
import { CounterInput } from "../../components/CounterInput";
import { TextArea } from "../../components/TextArea";
import { ImageInput } from "../../components/ImageInput";
import { AmountInput } from "../../components/AmountInput";
import { OptionInput } from "../../components/OptionInput";

export const steps = [
    {
        name: 'address',
        path: '/form/address',
        component: TextArea,
        order: 2,
        componentProps: {
            name: 'address',
            label: 'Dirección',
            val: (data) => data.address,
            required: true
        }
    },
    {
        name: 'email',
        path: '/form/email',
        component: EmailInput,
        order: 1,
        componentProps: {
            name: 'email',
            label: 'Email',
            val: (data) => data.email,
            required: true
        }
    },
    {
        name: 'floorNumber',
        path: '/form/floorNumber',
        component: CounterInput,
        order: 3,
        componentProps: {
            name: 'floorNumber',
            label: 'Número de piso',
            min: 0,
            max: 50,
            val: (data) => data.floorNumber,
            required: true
        }
    },
    {
        name: 'lift',
        path: '/form/lift',
        component: OptionInput,
        order: 8,
        componentProps: {
            label: 'Elevador',
            optionsConfig: [
                {
                    name: 'lift',
                    label: '¿Tiene elevador?',
                    val: (data) => data.lift
                }
            ]
        }
    },
    {
        name: 'name',
        path: '/form/name',
        component: TextInput,
        order: 0,
        componentProps: {
            name: 'name',
            label: 'Nombre completo',
            val: (data) => data.name,
            required: true
        }
    },
    {
        name: 'parking',
        path: '/form/parking',
        component: OptionInput,
        order: 5,
        componentProps: {
            label: 'Estacionamiento',
            optionsConfig: [
                {
                    name: 'parking',
                    label: '¿Tiene estacionamiento?',
                    val: (data) => data.parking 
                },
                {
                    name: 'covered',
                    label: '¿Esta cubierto?',
                    val: (data) => data.covered, 
                    when: {
                        param: 'parking',
                        condition: (parking) => parking === true
                    }
                }
            ]
        }
    },
    {
        name: 'photo',
        path: '/form/photo',
        component: ImageInput,
        order: 7,
        componentProps: {
            name: 'photo',
            label: 'Fotografía',
            val: (data) => data.photo 
        }
    },
    {
        name: 'price',
        path: '/form/price',
        component: AmountInput,
        order: 6,
        componentProps: {
            name: 'price',
            label: 'Precio',
            val: (data) => data.price,
            required: true
        }
    },
    {
        name: 'services',
        path: '/form/services',
        component: OptionInput,
        order: 4,
        componentProps: {
            name: 'services',
            label: 'Servicios',
            optionsConfig: [
                {
                    name: 'zonaBBQ',
                    label: 'Zona BBQ',
                    val: (data) => data.services.zonaBBQ, 
                },
                {
                    name: 'salonComunal',
                    label: 'Salon Comunal',
                    val: (data) => data.services.salonComunal, 
                },
                {
                    name: 'parqueJuegos',
                    label: 'Parque de Juegos',
                    val: (data) => data.services.parqueJuegos, 
                }
            ]
        }
    }
].sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));

export const defaultData = (() => {
    let data = {};
    steps.forEach((step) => {
        if (step.component.name === 'OptionInput') {
            if ('name' in step.componentProps) {
                let opts = {};
                step.componentProps.optionsConfig.forEach((opt) => {
                    opts[opt.name] = false;
                });
                data[step.componentProps.name] = opts;
            } else {
                step.componentProps.optionsConfig.forEach((opt) => {
                    data[opt.name] = false;
                });
            }
        } else {
            data[step.componentProps.name] = '';
        }
    });
    return data;
})();

export const labels = (() => {
    let labels = {};
    steps.forEach((step) => {
        if (step.component.name === 'OptionInput') {
            if ('label' in step.componentProps) {
                labels[step.componentProps.name] = step.componentProps.label;
            }

            step.componentProps.optionsConfig.forEach((opt) => {
                labels[opt.name] = opt.label;
            });
            
        } else {
            labels[step.componentProps.name] = step.componentProps.label;
        }
    });
    return labels;
})();

export default steps;