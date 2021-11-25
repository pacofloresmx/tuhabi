import { TextInput } from "../../components/TextInput";
import { EmailInput } from "../../components/EmailInput";
import { CustomCounterInput } from "../../components/CustomCounterInput";
import { YesNotInput } from "../../components/YesNotInput";
import { TextArea } from "../../components/TextArea";
import { ImageInput } from "../../components/ImageInput";
import { AmountInput } from "../../components/AmountInput";
import { OptionInput } from "../../components/OptionInput";

const steps = [{
    name: 'address',
    path: '/form/address',
    component: TextArea,
    order: 2,
    componentProps: {
        name: 'address',
        label: 'Dirección'
    }
  },
  {
    name: 'email',
    path: '/form/email',
    component: EmailInput,
    order: 1,
    componentProps: {
        name: 'email',
        label: 'Email'
    }
  },
  {
    name: 'floorNumber',
    path: '/form/floorNumber',
    component: CustomCounterInput,
    order: 3,
    componentProps: {
        name: 'floorNumber',
        label: 'Número de piso'
    }
  },
  {
    name: 'lift',
    path: '/form/lift',
    component: YesNotInput,
    order: 8
  },
  {
    name: 'name',
    path: '/form/name',
    component: TextInput,
    order: 0,
    componentProps: {
        name: 'name',
        label: 'Nombre completo'
    }
  },
  {
    name: 'parking',
    path: '/form/parking',
    component: YesNotInput,
    order: 5,
    componentProps: {
        name: 'parking',
        label: '¿Tiene estacionamiento?'
    }
  },
  {
    name: 'photo',
    path: '/form/photo',
    component: ImageInput,
    order: 7
  },
  {
    name: 'price',
    path: '/form/price',
    component: AmountInput,
    order: 6
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
                value: false
            },
            {
                name: 'salonComunal',
                label: 'Salon Comunal',
                value: false
            },
            {
                name: 'parqueJuegos',
                label: 'Parque de Juegos',
                value: false
            }
        ]
    }
  }
];

export default steps.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));