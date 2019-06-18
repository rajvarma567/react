import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './Main'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ProductList } from './products/ProductList';

const users = [{
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    url:"http://www.ducksters.com/graphics/student.png",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        "lat": "-37.3159",
        
      }
    }
},
{
    id: 2,
    "name": "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    url:"http://www.ducksters.com/graphics/student.png",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    }
},

{
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    }
}
]

ReactDOM.render(  <ProductList/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
