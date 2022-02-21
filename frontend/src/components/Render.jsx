import "./css/Render.css";
import React from "react";
import {useLocation} from "react-router-dom";

function Render(props){

    const location = useLocation();
    console.log(location.data);

    return(
    
        <p></p>
    
    );
}

export default Render; 