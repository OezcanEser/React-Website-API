import {
    Link
} from "react-router-dom";

const beerComp = (props) => {
    return (
        <figure className="beer">
            <img style={{ width: "30%", margin: "10% auto" }} src={props.data.image_url} alt="" />
            <figcaption>
                <h2>{props.data.name}</h2>
                <p style={{ color: "#FFCA41", fontSize: 18, fontWeight: 900 }}>{props.data.tagline}</p>
                <p>First brewed:<span>{props.data.first_brewed}</span></p>
                <p>Attenuation Level: <span>{props.data.attenuation_level}</span></p>
                <p>{props.data.description}</p>
                <p>{props.data.contributed_by}</p>
                <Link to="/AllBeers"><img src="../img/Back.svg" /></Link>
            </figcaption>
        </figure>);
}

export default beerComp;