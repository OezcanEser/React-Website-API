import React, { Component } from 'react';

import {
    Link
} from "react-router-dom";

class Home extends Component {
    state = {
        data: [],
        isLoaded: false
    }

    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, isLoaded: true });
            })
    }

    render() {
        return (<main>
            <figure className="homeFigure">
                <img src="img/allbeers.jpg" alt="#" />
                <figcaption>
                    <Link to="/AllBeers">All Beers</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, corporis?</p>
                </figcaption>
            </figure>
            <figure className="homeFigure">
                <img src="img/randombeer.jpg" alt="#" />
                <figcaption>
                    <Link to={`/beers/random`}>Random Beer</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, corporis?</p>
                </figcaption>
            </figure>
        </main >);
    }
}

export default Home;