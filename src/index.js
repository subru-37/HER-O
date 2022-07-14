import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const rootElement = document.getElementById("root");

// RENDERS THE WEBSITE
ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
    ,
  rootElement
);


//CHANGES THE PERCENTAGE OF BAR ON TOP WHILE SCROLLING THROUGH WEBSITE
const filled = document.querySelector('.filled');
function update(){
  filled.style.width = `${((window.scrollY)/(document.body.scrollHeight-window.innerHeight)*100)}%`
  requestAnimationFrame(update);
}
update();


//HIDES THE NAVIGATION BAR IN TABLET AND MOBILE VIEW
const nav = document.getElementById("glass");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if ((lastScrollY>window.scrollY)){
    nav.classList.remove("hidden-nav")
  }else{
    nav.classList.add("hidden-nav")
  }
  lastScrollY=window.scrollY;
  
});  


//HIDES NAV BAR WHEN A LINK IS ACCESSED IN TABLET AND MOBILE VIEW
window.addEventListener('resize', reportWindowSize);
function reportWindowSize(){
  var Width = window.innerWidth;
  if(Width<1000){
    document.querySelector('#myLinks').addEventListener('click', () => {
      document.querySelector('#myLinks').style.display ="none"
  }); 
  }else{
    document.getElementById("myLinks").style.display = "block";
  }
}


//GETS THE USER'S LOCATION AND MAILS TO HERO'S EMAIL AND SHOWS THE RESCUE MESSAGE TO USER
const getLocation = document.getElementById("locate2");
getLocation.addEventListener('click',evt=>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(position=>{
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let accuracy =  position.coords.accuracy;
            var message = "https://www.google.com/maps/search/?api=1&query="+latitude+","+longitude
            window.Email.send({
              Host: "smtp.elasticemail.com",
              Username: "easwaransubramaniOO7@gmail.com",
              Password: "2EC3AB001D08D4822B37BA44AD266BDD2CEB",
              Port: 2525,
              To: "pattambi.hero@gmail.com",
              From: "easwaransubramaniOO7@gmail.com",
              Subject: "LOCATION DETAILS OF REQUEST BY",
              Body: message
            }).then(
              message => alert(message)
            );
            const mes = document.getElementById("message");
            ReactDOM.render(
              <React.StrictMode>
                <div>
                <p>
                PS. Your location has been sent to HER-O, hold on to a safe area,<br/> you shall be rescued, you have an accuracy of {accuracy}m
                </p>
                </div>
              </React.StrictMode>,mes
            );
        },error=>{
            alert("ENABLE LOCATION ACCESS, ERROR CODE: "+error.code)
        },{
          enableHighAccuracy: true
        });
    }else{
        alert("Not supported")
    }

});



