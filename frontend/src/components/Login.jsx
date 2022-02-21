import "./css/Login.css";
import axios from 'axios';
import React, {useState} from "react";
import { Link } from "react-router-dom";

function Login(props)
{
    var data_Buffer;
  
    function submitEvent() 
    {
        post();
    }


    async function post()
    {
        const api_url = "http://127.0.0.1:8000/api/v1/json/call";

        const pos_t = JSON.stringify
        ({
            city   : document.getElementById('city').selectedOptions[0].text,
            rating : document.getElementById('rating').selectedOptions[0].text,
            type_c : document.getElementById('attraction_type').selectedOptions[0].text,
        });

        const res = await axios.post(api_url,  pos_t, {
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });

        data_Buffer = res;

    }



    return(

        <form className="LoginFrom">


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
        
                <Link 
                    to={{
                        pathname : "/Render",
                    }}

                    data ={{data:"test"}}

                >
                    <button type="submit" onClick={submitEvent}>Submit</button>
                </Link>

            </div>
    
    </form>
    );
}

export defaul