import "./css/Login.css";
import rend from '../utils/Constants'
import axios from 'axios';
import React, { Component } from "react";

class Login extends Component
{
    constructor()    {
        super();
        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            optionRender : false,
            data : []
        };
        
        if(this.state.optionRender == true){
            this.Reverse();
        }

    
        this.initial_defPage = (
    
            <div className="LoginFrom">
    
                <div className="SubLogin">
            
                    <h2> Find the perfect location</h2>
            
                    <div className="city">
            
                        <label htmlFor="city">City: </label>
            
                        <select name="city" id="city">
            
                            <option value="op_1">San Jose</option>
                            <option value="op_2">San Francisco</option>
                            <option value="op_3">Oakland</option>
                            <option value="op_4">Berkeley</option>
            
                        </select>
            
                    </div>
            
            
                    <div className="rating">
            
                        <label htmlFor="rating">Rating: </label>
            
                        <select name="rating" id="rating">
            
                            <option value="op_1">1.0</option>
                            <option value="op_2">1.5</option>
                            <option value="op_3">2.0</option>
                            <option value="op_4">2.5</option>
                            <option value="op_5">3.0</option>
                            <option value="op_6">3.5</option>
                            <option value="op_7">4.0</option>
                            <option value="op_8">4.5</option>
                            <option value="op_9">5.0</option>
            
                        </select>
            
                    </div>
            
            
            
                    <div className="attraction_type">
            
                        <label htmlFor="attraction_type">Type: </label>
            
                        <select name="attraction_type" id="attraction_type">
            
                            <option value="op_1">Restaurants</option>
                            <option value="op_2">Parks</option>
                            <option value="op_3">Bars</option>
                            <option value="op_4">Karaoke</option>
                            <option value="op_5">Malls</option>
                            <option value="op_6">Amusement Park</option>
                            <option value="op_7">Water Parks</option>
                            <option value="op_8">Landmark & Hills</option>
                            <option value="op_9">Musuem</option>
                            <option value="op_10">Monuments</option>
                            <option value="op_11">Temples</option>
                            <option value="op_12">Zoos</option>
                            <option value="op_13">Aquariums</option>
                            <option value="op_14">Art Galleries</option>
                            <option value="op_15">Tourist Attractions</option>
                            <option value="op_16">Tourist Attractions</option>
            
                        </select>
            
                    </div>
            
                    <button onClick={() => this.submitEvent()}>Submit</button>
    
                    
                </div>
    
            </div>
                
        
        );

        this.submitEvent = this.submitEvent.bind(this);
        this.render = this.render.bind(this);
    }

    setState( state ){
        window.localStorage.setItem(
            'state',
            JSON.stringify(state)
        );

        super.setState(state);
    }

    Reverse = () => {
        return this.setState({...this.state, optionRender : !this.state.optionRender});
    }
    

    async post_r()
    {
        const api_url = "http://127.0.0.1:8000/api/v1/json/call";

        const pos_t = JSON.stringify
        ({
            city   : document.getElementById('city').selectedOptions[0].text,
            rating : document.getElementById('rating').selectedOptions[0].text,
            type_c : document.getElementById('attraction_type').selectedOptions[0].text,
        });

        try
        {
            const res = await axios.post(api_url,  pos_t, {
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            super.setState({data: res.data});

        }catch(error){
            alert("error in post req");
        }
    }

    sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
      
    
    submitEvent = (event) =>
    {

        this.post_r();
        this.sleep(100).then(() => {
            this.Reverse();

            console.log(this.state.data);
            const parsed = JSON.parse(this.state.data);
            console.log(parsed);

        });
                
    }

    render()
    {
        if(this.state.optionRender===false)
        {

            return this.initial_defPage;
        }else{
            // const cards = [];
            // for(let i = 1; )

            return(
                <div><pre>{JSON.stringify(this.state.data) }</pre></div>
            );
        }    

    }
}

export default Login;