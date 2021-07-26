import React,{createContext, useState} from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children})=>{
    const [theme, setTheme] = useState({
        isLight: true,
        light:{
            background: "white",
            color: "black"
        },
        dark:{
            background: "black",
            color: "white"
        },
    })
    const changeTheme = ()=>{
        setTheme({
            ...theme,
            isLight: !theme.isLight,
        })
    }
    //context data
    const themeContextData = {
        theme, changeTheme
    }
    // Return data

    return(
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;