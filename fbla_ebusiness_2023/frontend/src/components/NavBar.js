import React, {useState} from 'react';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import "./css/Navbar.scss"
import { UncontrolledTooltip } from 'reactstrap';


function NavBar() {

    return ( 

            <header className='navBar'>
            <a href="#" className="sand">
              <i id="mail-icon" className="material-icons navicon sandwitch ">
                mail
              </i>
              <UncontrolledTooltip
                placement="right"
                target="mail-icon"
                defaultOpen={false}
                trigger="click"
                className="tooltip"
              >{`sunrisesuites@support.com`}</UncontrolledTooltip>

              <i id="phone-icon" className="material-icons navicon sandwitch ">
                phone
              </i>
              <UncontrolledTooltip
                placement="right"
                target="phone-icon"
                defaultOpen={false}
                trigger="click"
                className="tooltip"
              >{`(800)-640-1280`}</UncontrolledTooltip>
            </a>



            <nav>
                <ul>
                    <li className='text'>
                        <a href="/">Home</a>
                    </li>

                    <li className='text'>
                        {/* <a href="#about" >About Us</a> */}
                        {/* <a><Link to='#book'>About Us</Link></a> */}
                        <Link to="/#about">About Us</Link>
                        
                    </li>
                    <li className='text'>
                        <a href="/" >Local Attractions</a>
                    </li>
                    
                    <li className='divider'></li>
                    {/* <li>
                        <a href="#" class="fa fa-facebook"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-instagram special"></a>
                    </li> */}


                    <li>
                        <div class="back">
                          <a href="/rooms">
                            <div class="button_base b03_skewed_slide_in">
                                <div>Booking</div>
                                <div></div>
                                <div>Booking</div>
                            </div>
                            </a>
                        </div>
                </li>

                </ul>
            </nav>
        </header>
        
  );
}

export default NavBar;