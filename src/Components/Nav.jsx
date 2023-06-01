import { Link } from 'react-router-dom'


function Nav () {
    return (
        <nav>
            <Link className="home-button" to='/'>Home </Link>
            <Link className="articles-button" to='/articlelist'>Articles </Link>
        </nav>
    )
}


export default Nav;