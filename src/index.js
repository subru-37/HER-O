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



