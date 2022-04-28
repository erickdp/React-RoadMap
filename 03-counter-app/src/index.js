// Antes de React 18
/**
import React from 'react'
import ReactDom from "react-dom";
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp';

import "./index.css"
// const saludo = <h1>Hola mundo</h1>;

const divRoot = document.querySelector("#root");

ReactDom.render(<CounterApp value={23} />, divRoot);

*/

// React +18
import { createRoot } from 'react-dom/client'
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp';

import "./index.css"
// const saludo = <h1>Hola mundo</h1>;

const divRoot = document.querySelector("#root");

const root = createRoot(divRoot);

root.render(<CounterApp value={23} />);



