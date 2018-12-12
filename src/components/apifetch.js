import React, { Component } from 'react';

export default class Apifetch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    componentWillMount() {
        fetch("https://wj-python-movie-ratings.herokuapp.com/", {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Content-Type": 'application/json'
            }
        })
            .then(response => { return response.json(); })
            .then(responseData => { return responseData })
            .then(data => { this.setState({ movies: data }); })

            .catch(err => {
                console.log('Fetch error' + err)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="fetch-inner-con">
                    <h1>Here are the current movies</h1>
                    <div className="card-spacing">
                        {this.state.movies.map((data, index) => (
                            <div key={index} className="movie-card">
                                <p>Title: {data[0]}</p>
                                <p>Rating: {data[1]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
