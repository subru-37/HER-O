import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
    ,
  rootElement
);
const filled = document.querySelector('.filled');
function update(){
  filled.style.width = `${((window.scrollY)/(document.body.scrollHeight-window.innerHeight)*100)}%`
  requestAnimationFrame(update);
}
update();
const nav = document.getElementById("glass");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY<window.scrollY){
    nav.classList.add("hidden-nav");
  }else{
    nav.classList.remove("hidden-nav");
  }
  lastScrollY=window.scrollY;
});

const getLocation = document.getElementById("locate2");
console.log(getLocation);
getLocation.addEventListener('click',evt=>{
    if('geolocation' in navigator){
        let watchID = navigator.geolocation.watchPosition(position=>{
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let accuracy =  position.coords.accuracy;
            const mes = document.getElementById("message");
            ReactDOM.render(
              <React.StrictMode>
                <div>
                  PS. Your location has been sent to HER-O, hold on to a safe area, you shall be rescued
                </div>
              </React.StrictMode>,mes
            );
        },error=>{
            alert(error.code)
        },{
          enableHighAccuracy: true
        });
    }else{
        alert("Not supported")
    }

});



