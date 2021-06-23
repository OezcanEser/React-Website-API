import {
    Link
} from "react-router-dom";

const allBeerComp = (props) => {
    return (
        <figure>
            <img src={props.data.image_url} alt="" />
            <figcaption>
                <h2>{props.data.name}</h2>
                <p>{props.data.tagline}</p>
                <p>{props.data.contributed_by}</p>
                <Link to={`/beers/${props.data._id}`}>Details</Link>
            </figcaption>
        </figure>);
}

export default allBeerComp;