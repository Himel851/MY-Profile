import React from 'react'

import calender from "../images/porfolio1.jpg"
import travel from "../images/travel.jpg"
import created from "../images/created.jpg"
import restaurant from "../images/restaurant.jpg"


const Portfolio = () => {
    return (
        <div class="portfolio">
            <div class="container-fluid ">
                <div class="row">

                    <div class="col-md-3 box">
                        <div class="card" style={{ width: 288 }}>
                            <img class="card-img-top" style={{ height: 288 }} src={calender} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Calender 2021</h5>
                                <a href="https://himel851.github.io/Calendar-2021/" target="_blank" class="btn btn-primary">Click Here</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-3 box">
                        <div class="card" style={{ width: 288 }}>
                            <img class="card-img-top" style={{ height: 288 }} src={created} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Created ans Curated Goods</h5>
                                <a href="https://created-curated-goods.netlify.app/" target="_blank" class="btn btn-primary">Click Here</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-3 box">
                        <div class="card" style={{ width: 288 }}>
                            <img class="card-img-top" style={{ height: 288 }} src={travel} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Travel Guru Bangladesh</h5>
                                <a href="https://travelguru851.netlify.app/" target="_blank" class="btn btn-primary">Click Here</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-3 box">
                        <div class="card" style={{ width: 288 }}>
                            <img class="card-img-top" style={{ height: 260 }} src={restaurant} alt="Card image cap" />
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
