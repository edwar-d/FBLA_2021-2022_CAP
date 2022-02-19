import React from "react";
import "./LoginForm.css";



function LoginForm(){
    return(
        <form>
            <div className="form-inner">
            <h2> Find the perfect location</h2>
            <div className="form-group">
                <label htmlFor="name"> City: </label>
                <select name="selectList" id="selectList">
                <option value="option 1">San Jose </option>
                <option value="option 2">San Francisco</option>
                <option value="option 3">Oakland</option>
                <option value="option 4">Berkeley</option>
            </select>
            </div>
                <div className="form-group">
                    <label htmlFor="Rating">Rating: </label>
                    <select name="selectList" id="selectList">
                <option value="option 5">1.0 </option>
                <option value="option 6">2.0</option>
                <option value="option 7">3.0</option>
                <option value="option 8">4.0</option>
                <option value="option 9">5.0</option>
            </select>
                      </div>
                <div className="form-group">
                    <label htmlFor="Type">Type : </label>
                    <select name="selectList" id="selectList">
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
export default LoginForm;