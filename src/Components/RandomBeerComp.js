import {
    Link
} from "react-router-dom";

const beerComp = (props) => {
    return (
        <figure>
            <img src={props.data.image_url} alt="" />
            <figcaption>
                <h2>{props.data.name}</h2>
                <p>{props.data.tagline}</p>
                <p>{props.data.first_brewed}</p>
                <p>{props.data.attenuation_level}</p>
                <p>{props.data.description}</p>
                <p>{props.data.contributed_by}</p>
                <Link to="/AllBeers">Back</Link>
            </figcaption>
        </figure>);
}

export default beerComp;