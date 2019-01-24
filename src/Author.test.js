import React from 'react';
import ReactDOM from 'react-dom';
import Author from './Author'
import Enzyme, {mount,shallow,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new Adapter()});

const state={
    turnData:{
        books:['The shinning','IT','David Copperfield','A tale of two cities'],
        author:{
            name:'Charles dickens',
            imageUrl:'images/authors/charlesdickens.jpg',
            imageSource:'wikipedia commons',
            books:['David Copperfield','A tale of two cities']
        }
    },
    highlight: 'none',

}


describe("Author Quiz",()=>{
  it("renders without crashing",()=>{
      const div=document.createElement("div");
      ReactDOM.render(<Author {...state} onAnswerSelected={()=>{}}/>,div);
  })
});

describe("When no answer has been selected",()=>{
    let wrapper;
    beforeAll(()=>{
        wrapper=mount(<Author {...state} onAnswerSelected={()=>{}}/>);
    });
    it("should have no backgroundColor",()=>{
        expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('');
    });

});
describe("When selected the wrong answer",()=>{


})