import {useState} from 'react';

const useTheme=()=>{
    const [theme,setTheme]=useState("Light");

    const toggleHandler=()=>{
        if(theme==="Light"){
            setTheme("Dark");
        }
        else if(theme==="Dark"){
            setTheme("Light");
        }
    };

    return {theme,toggleHandler};
}

export default useTheme;