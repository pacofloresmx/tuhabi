import { useEffect, useState } from 'react';

const useLocalStorage = (itemName, initialValue) => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
    
    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch(error) {
                console.error(error);
            }
        }, 500);
    }, [initialValue, itemName]);
    
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch(error) {
            console.error(error);
        }
    };

    return {
        item,
        saveItem,
        setItem,
        loading
    };
}

export { useLocalStorage };
