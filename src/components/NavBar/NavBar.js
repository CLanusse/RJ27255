import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'


export const NavBar = () => {

    return (
        <header className="navbar">
            <Link to="/"><h1>Coder RJ</h1></Link>
            
            <nav>
                <ul>
                    <li><Link to="/category/zapatillas">Zapatillas</Link></li>
                    <li><Link to="/category/buzos">Buzos</Link></li>
                    <li><Link to="/category/remeras">Remeras</Link></li>
                </ul>
            </nav>

            <Link to="/cart"><CartWidget /></Link>
        </header>
    )
}


// export default NavBar