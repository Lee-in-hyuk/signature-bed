import React from 'react';
import { Link } from 'react-router-dom';

// Route 적용해서 Link 걸어야 돼서 그냥 Main에 같이 넣기로 함
function Header() {
    return (
        <div className='header'>
            <h1>SIGNATURE BED</h1>
            <ul>
                <Link to='/'><li>HOME</li></Link>
                <li>COLLECTION</li>
                <li>PRODUCT</li>
                <li>STORE</li>
                <li>ABOUT</li>
                <li>NOTICE</li>
            </ul>
        </div>
    );
}

export default Header;