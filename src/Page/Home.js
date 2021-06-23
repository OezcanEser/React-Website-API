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
        console.log(this.props.match.params)
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({ data: json, isLoaded: true });
            })
    }

    render() {
        return (<main>
            <figure>
                <img src="img/allbeers.jpg" alt="#" />
                <figcaption>
                    <Link to="/AllBeers">All Beers</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, corporis?</p>
                </figcaption>
            </figure>
            <figure>
                <img src="img/randombeer.jpg" alt="#" />
                <figcaption>
                    <Link to={`/beer/`}>Random Beer</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, corporis?</p>
                </figcaption>
            </figure>
        </main >);
    }
}

export default Home;