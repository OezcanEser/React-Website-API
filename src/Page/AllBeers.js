import React, { Component } from 'react';
import AllBeersComp from '../Components/AllBeersComp';


class allBeer extends Component {
    state = {
        data: [],
        isLoaded: false
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => {
                console.log(json)
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
            </section>
        );
    }
}

export default allBeer;