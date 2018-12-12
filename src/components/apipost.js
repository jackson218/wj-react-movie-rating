import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            title: "",
            rating: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
}

handleSubmit(event) {
    event.preventDefault();
    let title = this.state.title;
    let rating = this.state.rating;
    fetch("https://wj-python-movie-ratings.herokuapp.com/movies/input", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({title:title,rating:rating})
    }).then((res) => res.text())
    .then(responseData => {return responseData;})
    .catch((err) => console.log(err))
}

  render() {
    return (
      <div className="container post-form">
        <h1>Add a movie and a rating</h1>
        <form onSubmit={this.handleSubmit}>
            <label>
                Title: 
                <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
            </label>
            <label>
                Rating: 
                <input name="rating" type="integer" value={this.state.rating} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
