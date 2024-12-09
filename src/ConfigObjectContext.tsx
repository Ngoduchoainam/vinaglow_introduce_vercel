import React, { createContext, useContext } from "react";
import { ConfigObject } from "./Entities/ConfigObject.ts";

// Create the context
export const ConfigObjectContext = createContext<ConfigObject | undefined>(undefined);

// Custom hook to use the context
export const useConfigObject = () => {
    const context = useContext(ConfigObjectContext);
    if (!context) {
        throw new Error("useConfigObject must be used within a ConfigObjectProvider");
    }
    return context;
};
