import React from 'react';
import { steps, defaultData, labels } from './steps';
import { useLocalStorage } from './useLocalStorage';

const PropertyContext = React.createContext();

const PropertyProvider = (props) => {
    const {
        item: data,
        saveItem: saveData,
        setItem: setData,
        loading
    } = useLocalStorage('data', defaultData);
    
    return (
        <PropertyContext.Provider value={{
            data,
            setData,
            saveData,
            steps,
            labels,
            loading
        }}>
            {props.children}
        </PropertyContext.Provider>
    );
}

export { PropertyContext, PropertyProvider };
