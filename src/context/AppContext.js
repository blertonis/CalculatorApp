import { useState,createContext } from "react"

export const AppContext = createContext();
export const AppProvider = (props) =>{
   
    const [budget,setBudget] = useState("");
    
    
  
    return(<div>
        <AppContext.Provider value={{budget,setBudget}}>
            {props.children}
        </AppContext.Provider>
    </div>);
}