import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //higher order component that lets us have access to things related to redux
//higher order takes components as arguments and returns a new suped up component

import { auth } from '../../firebase/firebase.utils'
// we are setting it to the logo key word
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss';


//functional component
const Header = ({ currentUser }) => (
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
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signIn'></Link>
                }
            </div>

    </div>

);



export default connect()(Header);