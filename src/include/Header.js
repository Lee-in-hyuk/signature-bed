import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <h1><Link to='/'>SIGNATURE BED</Link></h1>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/'>COLLECTION</Link>
                    <ul id='sub_menu1'>
                        <li><Link to='/collection1'>SIGNATURE BASIC</Link></li>
                        <li><Link to='/'>SIGNATURE G2</Link></li>
                        <li><Link to='/'>SIGNATURE ACTIVE</Link></li>
                    </ul>
                </li>
                <li><Link to='/'>PRODUCT</Link>
                    <ul id='sub_menu2'>
                        <li><Link to='/'>TOPPER</Link></li>
                        <li><Link to='/'>MATRESS(ALL-IN-ONE)</Link></li>
                        <li><Link to='/'>MATRESS(FOLDABE)</Link></li>
                        <li><Link to='/'>MOTION BED</Link></li>
                    </ul>
                </li>
                <li><Link to='/'>STORE</Link></li>
                <li><Link to='/'>ABOUT</Link></li>
                <li><Link to='/'>NOTICE</Link></li>
            </ul>
        </div>
    );
}

export default Header;