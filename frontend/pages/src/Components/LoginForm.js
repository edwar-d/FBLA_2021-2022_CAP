import React from "react";
import "./LoginForm.css";



function LoginForm(){
    return(
        <form>
            <div className="form-inner"></div>
            <h2> Find the perfect location</h2>
            <div className="form-group">
                <label htmlFor="name"> Cost : </label>
                <input type="text" name="cost" id="cost"/>
                <div className="form-group">
                    <label htmlFor="Rating">Rate : </label>
                    <input type="text" name="rating" id="rating"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Type">Type : </label>
                    <input type="text" name="type" id="type"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Time">Time : </label>
                    <input type="text" name="time" id="time"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Tour"> Tour : </label>
                    <input type="text" name="tour" id="tour"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Distance"> Dist : </label>
                    <input type="text" name="distance" id="distance"/>
                </div>
                <input type="submit" value="Search"/>
            </div>
        </form>
    )
}
export default LoginForm;