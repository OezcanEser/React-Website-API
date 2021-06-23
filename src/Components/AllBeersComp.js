import {
    Link
} from "react-router-dom";

const allBeerComp = (props) => {
    return (
        <figure className="allBeerFigure">
            <img src={props.data.image_url} alt="" />
            <figcaption>
                <h2>{props.data.name}</h2>
                <p style={{ color: "#FFCA41", fontSize: 18, fontWeight: 900 }}>{props.data.tagline}</p>
                <p>{props.data.contributed_by}</p>
                <Link to={`/beers/${props.data._id}`}>Details</Link>
            </figcaption>
        </figure>);
}

export default allBeerComp;