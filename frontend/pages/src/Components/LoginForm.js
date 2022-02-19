import React, { Component } from "react";
import "./LoginForm.css";



class LoginForm extends Component
{

    api_POST = async() =>
    {
        var T = document.getElementById("city");
        var o_City = T.options[T.selectedIndex].text;

        T = document.getElementById("rating");
        var o_Rating = T.options[T.selectedIndex].text;

        var T = document.getElementById("type");
        var o_Type = T.options[T.selectedIndex].text;

        const request_Post = 
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({"city" : o_City, "rating" : o_Rating, "type_c":o_Type})
        };

        
        await fetch('http://127.0.0.1:8000/api/v1/json/call', request_Post)
        

    }



    render()
    {
        return(
            <form onSubmit={() => this.api_POST()}>
                <div className="form-inner">
                <h2> Find the perfect location</h2>
                <div className="form-group">
                    <label htmlFor="name"> City: </label>
                    <select name="city" id="city">
                        <option value="option 1">San Jose </option>
                        <option value="option 2">San Francisco</option>
                        <option value="option 3">Oakland</option>
                        <option value="option 4">Berkeley</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="Rating">Rating: </label>
                        <select name="rating" id="rating">
                        <option value="option 5">1.0 </option>
                        <option value="option 6">2.0</option>
                        <option value="option 7">3.0</option>
                        <option value="option 8">4.0</option>
                        <option value="option 9">5.0</option>
                    </select>
                </div>
                    <div className="form-group">
                        <label htmlFor="Type">Type : </label>
                        <select name="type" id="type">
                          <option value="option 10">Restaurants </option>
                          <option value="option 11">Parks</option>
                          <option value="option 12">Bars</option>
                          <option value="option 13">Karaoke</option>
                          <option value="option 14">Malls</option>
                          <option value="option 15">Amusement Park</option>
                          <option value="option 16">Water Parks</option>
                          <option value="option 17">Landmark & Hills</option>
                          <option value="option 18">Musuem</option>
                          <option value="option 19">Monuments</option>
                          <option value="option 20">Temples</option>
                          <option value="option 21">Malls</option>
                          <option value="option 22">Zoos</option>
                          <option value="option 23">Aquariums</option>
                          <option value="option 24">Art Galleries</option>
                          <option value="option 25">Tourist AttractionsIcon</option>
                          <option value="option 26">Malls</option>
                        </select>
                    </div>
                        <input type="submit" value="Search"/>
                </div>
            </form>
        )
    }
}
export default LoginForm;