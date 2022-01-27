import React from 'react';
import './product1.scss';
import { VscAdd } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Product1() {
    return (
        <div id='prd1_wrap'>
            <h1>토퍼</h1>
            <div id='prd1_container'>
                <div id='prd1_container1_bs'>
                    <Link to='/basic1'>
                        <div className='fir_img'>
                            <div className='fir_txt'>
                                <p><VscAdd/></p>
                                <span>SIGNATURE BASIC</span>
                                <p>3T</p>
                            </div>
                            <img src='signature-bed-image/prd1_1.jpg' alt='con1'/>
                        </div>
                        <div className='sec_img'>
                            <img src='signature-bed-image/prd1_1h.jpg' alt='con1'/>
                        </div>
                    </Link>
                </div>
                <div id='prd1_container2_g2'>
                    <Link to='/g2_01'>
                        <div className='fir_img'>
                            <div className='fir_txt'>
                                <p><VscAdd/></p>
                                <span>SIGNATURE G2</span>
                                <p>4T</p>
                            </div>
                            <img src='signature-bed-image/prd1_2.jpg' alt='con2'/>
                        </div>
                        <div className='sec_img'>
                            <img src='signature-bed-image/prd1_2h.jpg' alt='con2'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Product1;