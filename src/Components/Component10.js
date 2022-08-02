//RENDERS THE SLIDESHOW WHICH DISPLAYS POWERS OF OUR HER-O

import React from 'react';
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
const zoomOutProperties = {
    duration: 30000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  };
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
        <div className="each-fade i1">
                    <div className='opa'>
                        <h1>
                        Flight
                        </h1>
                        <p>
                        Of all the traditional superhero powers, very few are as easily named as flight. What is a superhero without flying abilities? Flight is of prime importance because the her-o needs to reach at the place of action within a fraction of second. Even though it’s not impossible, it is really hard without it.
                        Flight can exponentially unleash the potential that Lies within. Simply put, flight is synonymous with superheroes because flight is something every commoner desires. 
                        </p>
                    </div>
                </div>
                <div className="each-fade i3">
                    <div className='opa'>
                <h1>
                    Healing 
                </h1>
                    <p>
                    The longevity of the hero's existence depends on healing. Not only does expedite the time for wounds to repair but it also greatly increases the length of life of a hero. If a body can heal quickly externally, it also means that it heals quickly internally. A superhero who can heal never has to worry about a heart attack, kidney failure, infection, or the like. In addition, due to their power to heal they also age at an infinitesimal rate.
                    </p>
                </div>
                </div>
        </Zoom>
      </div>
    );
  };
export default function Component10() {
  return (
    <div className='content10' id='abilities'>
        <div className='slide'>
            <h1>
                HER-O ABILITIES
            </h1>
        </div>
        <Slideshow />
    </div>
        
  );
}