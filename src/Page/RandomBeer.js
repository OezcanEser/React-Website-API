import React, { Component } from 'react';
import BeerComp from '../Components/BeerComp';
import NavBar from '../Components/NavComp';

class allBeer extends Component {
    state = {
        data: {},
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
        return (
            <section>
                {this.state.isLoaded ?
                    <BeerComp
                        data={this.state.data} />
                    : "Loading ..."
                }
                <NavBar />
            </section>
        );
    }
}

export default allBeer;