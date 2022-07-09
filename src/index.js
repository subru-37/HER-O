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
  if ((lastScrollY<window.scrollY)){
    nav.classList.add("hidden-nav");
    
  }else{
    nav.classList.remove("hidden-nav");
  }
  lastScrollY=window.scrollY;
});  
// document.querySelector('#myLinks').addEventListener('click', () => {
//   document.querySelector('#myLinks').style.display ="none"
// }); 
const getLocation = document.getElementById("locate2");
console.log(getLocation);
getLocation.addEventListener('click',evt=>{
    if('geolocation' in navigator){
        let watchID = navigator.geolocation.getCurrentPosition(position=>{
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let accuracy =  position.coords.accuracy;
            var x=prompt("enter your phone number");
            if (x.length<10){
              alert("Enter correct phone number")
            }else{
            alert("your latitude is: "+latitude+" your longitude is: "+longitude+" Accuracy is: "+accuracy);
            const mes = document.getElementById("message");
            ReactDOM.render(
              <React.StrictMode>
                <div>
                  PS. Your location has been sent to HER-O, hold on to a safe area, you shall be rescued
                </div>
              </React.StrictMode>,mes
            );}
        },error=>{
            alert(error.code)
        },{
          enableHighAccuracy: true
        });
    }else{
        alert("Not supported")
    }

});



