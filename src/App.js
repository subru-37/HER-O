import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Component4 from './Components/Component4';
import Component5 from './Components/Component5';
import React from "react";


export default function App() {
  return (
    <div>
      <Component1/>
      <Component2/>
      <Component3/>
      <div>
        <Component4/>
        <Component5/>
      </div>
    </div>
  );
}

