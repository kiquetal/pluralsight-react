import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import './bootstrap.min.css';
import PropTypes from 'prop-types';


function Hero() {
    return (<div className="row">

        <div className="jumbotron col-10 offset-1">
            <h1>Author Quizz</h1>
            <p>Select the book written by the author shown</p>
        </div>
    </div>);
}

function Turn({author, books, highlight, onAnswerSelected}) {

    function highlightToBgColor(highlight) {
        const mapping = {
            'none': '',
            'correct': 'green',
            'wrong': 'red'
        };
        return mapping[highlight];
    }

    console.log(highlightToBgColor(highlight));
    return (<div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
        <div className="col-4 offset-1">
            <img className="authorimage" alt="Author" src={author.imageURL}/>
        </div>
        <div className="col-6">
            {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}/>)}
        </div>
    </div>);

}

Turn.propTypes = {
    author: PropTypes.shape({

        name: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired
}


function Book({title, onClick}) {
    return (<div className="answer" onClick={() => {
        onClick(title);
    }}>
        <h4>{title}</h4>
        <hr/>
    </div>)
}

function Continue({show,onContinue}) {

    return (<div className="row continue">
            {
                show?<div className="col-11">
                  <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
                </div>:null
            }

    </div>
    );

}

function Footer() {
    return (<div id="footer" className="for">
        <div className="col-12">
            <p className="text-muted credit">
                All images are from <a href="http://commons.wikimedia.org/wiki"/>
            </p>
        </div>
    </div>);
}


function Author({turnData, highlight, onAnswerSelected,onContinue}) {
    return (

        <div className="container-fluid">
            <Hero/>
            <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
            <Continue show={highlight==='correct'} onContinue={onContinue}/>
            <p><Link to="/add">Add Author</Link></p>
            <Footer/>
        </div>
    );
}


export default Author;
