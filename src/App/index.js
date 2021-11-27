import React from 'react';
import { PropertyProvider } from '../contexts/PropertyContext';
import { AppUI } from './AppUI';

const App = () => {
    return (
        <PropertyProvider>
            <AppUI />
        </PropertyProvider>
    );
}

export default App;
