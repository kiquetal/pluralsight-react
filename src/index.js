import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Author from './Author';
import * as serviceWorker from './serviceWorker';


const authors=[{
    name:"Mark Twain",
    imageURL:'images/authors/marktwain.jpg',
    imageSource:'Wikimedia Commons',
    books:['The adventures of Huckley Fin','Seconds books']
}];
const state={
    turnData:{
    author:authors[0],
    books:authors[0].books
}}




ReactDOM.render(<Author {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
