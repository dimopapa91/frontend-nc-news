import { Link } from 'react-router-dom'


function Nav () {
    return (
        <nav>
            <Link to='/'>Home </Link>
            <Link to='/articlelist'>Articles </Link>
        </nav>
    )
}


export default Nav;