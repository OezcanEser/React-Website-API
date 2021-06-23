import React, { Component } from 'react';
import AllBeersComp from '../Components/AllBeersComp';
import NavBar from '../Components/NavComp';

class allBeer extends Component {
    state = {
        data: [],
        isLoaded: false
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, isLoaded: true });
            })
    }

    render() {
        return (
            <section>
                {this.state.isLoaded ?
                    this.state.data.map((ele, i) => <AllBeersComp key={ele._id} data={ele} />)
                    : "Loading ..."
                }
                <NavBar />
            </section>
        );
    }
}

export default allBeer;