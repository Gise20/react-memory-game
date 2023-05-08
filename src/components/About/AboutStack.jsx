import React from "react";
import imgReact from "../../assets/images/stacks-icons/reactjs.png";

const AboutStack = () =>{
    return(
        <div>
              <label  className="about-stacks-lbl">What's my stack?</label>
              <div class="about-stack-circle-container">
                <div class="about-stack-circle-shadow">
                  <div class="about-stack-circle">
                    <img src={imgReact} alt="Your Image" class="about-stack-centered-image"/>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default AboutStack