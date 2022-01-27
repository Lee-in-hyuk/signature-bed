import React from 'react';
import './product2.scss';
import { VscAdd } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Product2() {
    return (
        <div id='prd2_wrap'>
            <h1>토퍼매트리스</h1>
            <p>일체형</p>
            <div id='prd2_container'>
                <div id='prd2_container1_bs'>
                    <Link to='/basic2'>
                        <div className='fir_img'>
                            <div className='fir_txt'>
                                <p><VscAdd/></p>
                                <span>SIGNATURE BASIC</span>
                                <p>5.5T</p>
                            </div>
                            <img src='signature-bed-image/prd2_1.jpg' alt='con1'/>
                        </div>
                        <div className='sec_img'>
                            <img src='signature-bed-image/prd2_1h.jpg' alt='con1'/>
                        </div>
                    </Link>
                </div>
                <div id='prd2_container2_g2'>
                    <Link to='/g2_02'>
                        <div className='fir_img'>
                            <div className='fir_txt'>
                                <p><VscAdd/></p>
                                <span>SIGNATURE G2</span>
                                <p>6T</p>
                            </div>
                            <img src='signature-bed-image/prd2_2.jpg' alt='con2'/>
                        </div>
                        <div className='sec_img'>
                            <img src='signature-bed-image/prd2_2h.jpg' alt='con2'/>
                        </div>
                    </Link>
                </div>
                <div id='prd2_container2_at'>
                    <Link to='/active'>
                        <div className='fir_img'>
                            <div className='fir_txt'>
                                <p><VscAdd/></p>
                                <span>SIGNATURE ACTIVE</span>
                                <p>8T</p>
                            </div>
                            <img src='signature-bed-image/prd2_3.jpg' alt='con3'/>
                        </div>
                        <div className='sec_img'>
                            <img src='signature-bed-image/prd2_3h.jpg' alt='con3'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Product2;