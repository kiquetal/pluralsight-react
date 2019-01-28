import React from 'react';
import './AddAuthorForm.css';


class AuthorForm extends  React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            imageurl:'',
            books:[],
            bookTemp:''
        }
        this.onFieldChange=this.onFieldChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleAddBook=this.handleAddBook.bind(this);
    }

    onFieldChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onAddAuthorForm(this.state);
    }
    handleAddBook(event){
        this.setState({
            books:this.state.books.concat([this.state.bookTemp]),
            bookTemp:''
        })
    }


    render(){
        return <form onSubmit={this.handleSubmit}>
            <div className="AddAuthorForm__input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}/>
            </div>
            <div className="AddAuthorForm__input">
                <label htmlFor="imageurl">Image url </label>
                <input type="text" name="imageurl" value={this.state.imageurl} onChange={this.onFieldChange}/>
            </div>
            <div className="AddAuthorForm__input">
                <label htmlFor="bookTemp">Books </label>
                {this.state.books.map((book)=><p key={book}>{book}</p>)}
                <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange}/>
               <input type="button" value="+" onClick={this.handleAddBook}/>
            </div>
        <input type="submit" value="Add"/>
        </form>
    }


}

function AddAuthorForm({match,onAddAuthorForm})
{
    return <div className="AddAuthorForm">
        <h1>Add Author</h1>
        <AuthorForm onAddAuthorForm={onAddAuthorForm}/>
     </div>
}

export default AddAuthorForm;