import React from 'react'
import { Progress } from 'reactstrap';

const Skill = () => {

    return (
        <div class="skill">
            <div class="container  ">
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="progress-title">HTML</h3>
                        <div class="progress">
                            <div class="progress-bar html" >
                                <div class="progress-value">95%</div>
                            </div>
                        </div>
                        <h3 class="progress-title">CSS</h3>
                        <div class="progress">
                            <div class="progress-bar css" >
                                <div class="progress-value">80%</div>
                            </div>
                        </div>
                        <h3 class="progress-title ">JAVASCRIPT</h3>
                        <div class="progress">
                            <div class="progress-bar js" >
                                <div class="progress-value">65%</div>
                            </div>
                        </div>
                        <h3 class="progress-title ">BOOTSTRAP</h3>
                        <div class="progress">
                            <div class="progress-bar bootstrap" >
                                <div class="progress-value">80%</div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                    <h3 class="progress-title ">C</h3>
                        <div class="progress">
                            <div class="progress-bar C" >
                                <div class="progress-value">90%</div>
                            </div>
                        </div>
                        <h3 class="progress-title ">C++</h3>
                        <div class="progress">
                            <div class="progress-bar Cplus" >
                                <div class="progress-value">80%</div>
                            </div>
                        </div>
                        <h3 class="progress-title ">REACT</h3>
                        <div class="progress">
                            <div class="progress-bar react" >
                                <div class="progress-value">50%</div>
                            </div>
                        </div>
                        <h3 class="progress-title ">REACT ROUTER</h3>
                        <div class="progress">
                            <div class="progress-bar router" >
                                <div class="progress-value">65%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill
