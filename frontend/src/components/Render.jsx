import "./css/Render.css";
import React, { Component } from "react";

class Render extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {

        alert(this.props.location.data);

        return(

            <p>feefe</p>
        
        );
    }

}


export default Ren