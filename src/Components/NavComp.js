import {
    Link
} from "react-router-dom";

const NavBar = () => {
    return (<footer>
        <nav>
            <ul>
                <Link to="/"><img src="../img/Logo.jpg" alt="" /></Link>
            </ul>
        </nav>
    </footer>);
}

export default NavBar;