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
                        <li><Link to='/collection2'>SIGNATURE G2</Link></li>
                        <li><Link to='/collection3'>SIGNATURE ACTIVE</Link></li>
                    </ul>
                </li>
                <li><Link to='/'>PRODUCT</Link>
                    <ul id='sub_menu2'>
                        <li><Link to='/product1'>TOPPER</Link></li>
                        <li><Link to='/product2'>MATRESS(ALL-IN-ONE)</Link></li>
                        <li><Link to='/product3'>MATRESS(FOLDABE)</Link></li>
                        <li><Link to='/product4'>MOTION BED</Link></li>
                    </ul>
                </li>
                <li><Link to='/store'>STORE</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/notice'>NOTICE</Link></li>
            </ul>
        </div>
    );
}

export default Header;