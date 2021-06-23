import {
    Link
} from "react-router-dom";

const NavBar = () => {
    return (<footer>
        <nav>
            <ul>
                <Link to="/">Home</Link>
            </ul>
        </nav>
    </footer>);
}

export default NavBar;