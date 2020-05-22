import React from 'react'
import {Link} from 'react-router-dom';

// we are setting it to the logo key word
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.style.scss';


//functional component
const Header = () => (
    // div that contains header code
    <div className='header'> 
        {/* logo that links to hompage on click */}
        {/* link to homepage */}
        {/* svg logo, really small, really performant, 
        looks the same no matter what the size */}
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
            </div>

    </div>

)

export default Header;