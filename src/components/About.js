import React from 'react'
import himel from '../images/himel.jpg'

const About = () => {
    return (
        <div class="about">
            <div class="container ">
                <div class="row">
                    <div class="col-md-6">
                        <div>
                            <img src={himel} />
                        </div>
                    </div>
                    <div class="col-md-6">

                        <div>
                            <p>Hi... I am <b>Nazmul Hasan Himel.</b></p>
                            <p>A dedicated and hardworking individual with a Bachelor's degree in Computer Science and work experience of 3 years. Being well aware of the challenges and demands of this ever-evolving sector, I am offering my efficient and diligent services to fulfill the requirements of the IT industry. <br/> I aim at keeping myself up-to-date with the on-going developments in this field. Therefore, through my growing knowledge as well as sharp focus, I intend to successfully achieve my career goals. Expert in React.js, Node.js, Express, MongoDB, Firebase, Redux.<br/>
                            I completed my Bachelor of Science in Computer Science &amp; Engineering at Daffodil International University.
                            Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
