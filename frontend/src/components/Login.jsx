import "./css/Login.css";
import rend from '../utils/Constants'
import axios from 'axios';
import React, { Component } from "react";
import Bridge from './ggl.jpg'
import Card from './Card'
import attractions from '../data'

function createCard(tourist) {
    return <Card 
      key = {tourist.name}
      name = {tourist.name}
      loc = {tourist.loc}
      address = {tourist.address}
      number = {tourist.number}
      website = {tourist.website}
      times = {tourist.open_time}
      rating = {tourist.star_rating}
      reviews = {tourist.reviews}
    />
  }



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

            <div className="Image"> 
            {/* <img src={Bridge} height={200} width={200}/> */}
            <div className="LoginFrom">
                <div className="SubLogin">
            
                <div className="hi">
                    <h1>Find the Perfect Location</h1>
                </div>
                    <div className="city">
            
                        <label htmlFor="city">City: </label>
            
                        <select name="city" id="city">
                            
                            <option value="op_1">Select</option> 
                            <option value="op_2">San Francisco</option>
                            <option value="op_3">San Jose</option>
                            <option value="op_4">Los Altos</option>
                            
            
                        </select>
            
                    </div>

                    <div className="attraction_type">
            
                        <label htmlFor="attraction_type">Type: </label>
            
                        <select name="attraction_type" id="attraction_type">
                            <option value="op_1">Select</option> 
                            <option value="op_2">Restaurant</option>
                            <option value="op_3">Monuments</option>
                            <option value="op_4">Parks</option>
                            <option value="op_5">Galleries</option>
                            <option value="op_6">Hotels</option>
                            <option value="op_7">Shopping</option>
        
                        </select>
            
                    </div>
            
            
                    <div className="rating">
            
                        <label htmlFor="rating">Rating: </label>
            
                        <select name="rating" id="rating">
            
                            <option value="op_1">Select</option> 
                            <option value="op_2">1</option>
                            <option value="op_3">2</option>
                            <option value="op_4">3</option>
                            <option value="op_5">4</option>
                            <option value="op_6">5</option>
            
                        </select>
            
                    </div>
            
                    <div className="tour">
                        <label htmlFor="tour"> Guided Tours: </label>
                         <select name="tour" id="tour">
            
                            <option value="op_1">Select</option> 
                            <option value="op_2">Yes</option>
                            <option value="op_3">No</option>
            
                        </select>
                    </div>

                    <div className="numOfReviews">
                        <label htmlFor="numOfReviews"> Number of reviews: </label>
                         <select name="numOfReviews" id="numOfReviews">
            
                            <option value="op_1">Select</option> 
                            <option value="op_2">1-10</option>
                            <option value="op_3">10-100</option>
                            <option value="op_4">100-500</option>
                            <option value="op_5">500-1000</option>
                            <option value="op_6">1000+</option>
                        </select>
                    </div>

            <div className="button">
                    <button onClick={() => this.submitEvent()}>Submit</button>
                    </div>
                </div>
    
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

            this.queryData= JSON.parse(res.data.replaceAll("'", "").replaceAll("n\\", ""));
            super.setState({data: this.queryData});

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

            // Irrelevant
            // console.log(this.state.data);
            // const parsed = JSON.parse(this.state.data);
            // console.log(parsed);

        });
                
    }

    
    render()
    {
        if(this.state.optionRender===false)
        {

            return this.initial_defPage;
        }else{
            return(
                <div>
                    <h1 className = 'main-header'>Your Suggested Attractions...</h1>
                    {this.queryData.map(createCard)}
                    {/* <pre>{JSON.stringify(this.state.data) }</pre> */}
                </div>
            );
        }    

    }
}

export default Login;

