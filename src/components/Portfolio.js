import React from 'react'

import calender from "../images/porfolio1.jpg"
import travel from "../images/travel.jpg"
import profile from "../images/profile.png"
import restaurant from "../images/restaurant.jpg"


const Portfolio = () => {
    return (
        <div class="portfolio">
            <div class="container-fluid ">
                <div class="row">

                    <div class="col-md-3 box">
                        <div class="card" style={{ width: 288 }}>
                            <img class="card-img-top" src={calender} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Calender 2021</h5>
                                <a href="https://himel851.github.io/Calendar-2021/" target="_blank" class="btn btn-primary">Click Here</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-3 box">
                        <div class="card" style={{ width: 288 }}>
                            <img class="card-img-top" src={profile} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">My Profile</h5>
                                <a href="https://himel851.github.io/Nazmul-Himel/" target="_blank" class="btn btn-primary">Click Here</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-3 box">
                        <div class="card" style={{ width: 288 }}>
                            <img class="card-img-top" src={travel} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Travel Guru Bangladesh</h5>
                                <a href="https://himel851.github.io/travel-guru/" target="_blank" class="btn btn-primary">Click Here</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-3 box">
                        <div class="card" style={{ width: 288 }}>
                            <img class="card-img-top" src={restaurant} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Restaurant Management System</h5>
                                <a href="https://himel851.github.io/Restarant-Management-System/#special" target="_blank" class="btn btn-primary">Click Here</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Portfolio
