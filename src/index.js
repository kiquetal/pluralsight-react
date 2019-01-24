import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Author from './Author';
import * as serviceWorker from './serviceWorker';
import {shuffle,sample} from 'underscore';

const authors=[{
    name:"Mark Twain",
    imageURL:'images/authors/marktwain.jpg',
    imageSource:'Wikimedia Commons',
    books:['The adventures of Huckley Fin','Seconds books']
},{
    name:"Stephen King",
    imageURL:"images/authors/stephenking.jpg",
    imageSource:'Wikimedia Commons',
    books:['The shinning','Carrie','The call']
},
    {
        name:'Chuck Palahniuk',
        imageURL:'images/authors/chuckpalahniuk.jpg',
        imageSource:'Wikimedia Commons',
        books:['Damn','Fight CLub']
    },
    {
        name:"George Romero",
        imageURL:'images/authors/georgeromero.jpg',
        imageSource:'Wiki media',
        books:['zombie 1','zombie 2']
    }];

function getTurnData(authors)
{
    const allBooks=authors.reduce((p,c,i) =>{
        return p.concat(c.books)
},[]);
    const fourRandomBooks=shuffle(allBooks).slice(0,4)
    const answer=sample(fourRandomBooks)

return {
        books:fourRandomBooks,
        author:authors.find((author)=> author.books.some((title)=> title===answer))
    }
}

const state={
    turnData: getTurnData(authors),
    highlight:''
};


function onAnswerSelected(answer) {

    const isCorrect=state.turnData.author.books.some((book)=>book===answer);
    state.highlight=isCorrect?'correct':'wrong';
    render();
}

function render(){
    ReactDOM.render(<Author {...state}  onAnswerSelected={onAnswerSelected}/>, document.getElementById('root'));
}

render();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
