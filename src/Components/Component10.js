//RENDERS THE SLIDESHOW WHICH DISPLAYS POWERS OF OUR HER-O

import React from 'react';
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
export default function Component10() {
  return (
    <div className='content10'>
        <div className='slide'>
            <h1 id='abilities'>
                HER-O ABILITIES
            </h1>
        </div>
        <div className="slide-container">
            <Fade>
                <div className="each-fade i1">
                    <div className='opa'>
                        <h1>
                        Flight
                        </h1>
                        <p>
                        Of all the traditional superhero powers, very few are as easily named as flight. I mean, flight and superheroes go hand in hand. Go ahead, try to name ten superpowers without naming flight. Even though it’s not impossible, it is really hard.
                        In truth, there are more superheroes who can fly than I can probably name. I’d like to give you a really good reason as to why this is, but the reason isn’t that good. Simply put, flight is synonymous with superheroes because flight is something we all wish we can do. 
                        </p>
                    </div>
                </div>
                <div className="each-fade i3">
                    <div className='opa'>
                <h1>
                    Healing 
                </h1>
                    <p>
                    Of all the traditional superhero powers, none can give a hero the longevity that increased healing can. Not only does expedite the time for wounds to repair but it also greatly increases the length of life of a hero. 
                    And how?
                    Simple. 
                    If a body heals quickly externally, it also means that heals quickly internally. Think about it like this. A superhero who can heal never has to worry about a heart attack, kidney failure, infection, or the like. In addition, due to their power to heal they also age very slowly. 
                    </p>
                </div>
                </div>
                
            </Fade>
        </div>
    </div>
        
  );
}