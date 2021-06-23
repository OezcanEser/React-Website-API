import React, { Component } from 'react';
import BeerComp from '../Components/BeerComp';


class allBeer extends Component {
    state = {
        data: {},
        isLoaded: false
    }

    componentDidMount() {
        console.log(this.props.match.params)
        let id = this.props.match.params.beerId
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
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
                    <BeerComp
                        data={this.state.data} />
                    : "Loading ..."
                }
            </section>
        );
    }
}

export default allBeer;