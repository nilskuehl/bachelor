import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BehaviorSubject } from "rxjs";

interface DataServiceContextType {
    currentLevel: string;
    currentSize: string;
    setLevel: (level: string) => void;
    setSize: (size: string) => void;
}

interface DataServiceProps {
    children: ReactNode;
}


// Create a context for the service
export const DataServiceContext = createContext<DataServiceContextType | null>(null);

// DataService component
export const DataService = ({ children }: DataServiceProps) => {
    const [currentLevel, setCurrentLevel] = useState('A');
    const [currentSize, setCurrentSize] = useState('size1');

    // Function to update the currentLevel value
    const setLevel = (level: string) => {
        setCurrentLevel(level);
    };

    // Function to update the currentSize value
    const setSize = (size: string) => {
        setCurrentSize(size);
    };

    // Create an object with the values and functions to be shared
    const dataServiceValue: DataServiceContextType = {
        currentLevel,
        currentSize,
        setLevel,
        setSize,
    };

    return (
        <DataServiceContext.Provider value={dataServiceValue}>
            {children}
        </DataServiceContext.Provider>
    );
};

// Custom hook to access the DataServiceContext
export const useDataService = (): DataServiceContextType => {
    const context = useContext(DataServiceContext);
    if (!context) {
        throw new Error('useDataService must be used within a DataServiceProvider');
    }
    return context;
};