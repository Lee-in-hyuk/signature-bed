import React from 'react';
import './product3.scss';
import { VscAdd } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Product3() {
    return (
        <div id='prd3_wrap'>
            <h1>토퍼매트리스</h1>
            <p>접이식</p>
            <div id='prd3_container'>
                <div id='prd3_container1_bs'>
                    <Link to='/basic3'>
                        <div className='fir_img'>
                            <div className='fir_txt'>
                                <p><VscAdd/></p>
                                <span>SIGNATURE BASIC</span>
                                <p>5.5T</p>
                            </div>
                            <img src='signature-bed-image/prd3_1.jpg' alt='con1'/>
                        </div>
                        <div className='sec_img'>
                            <img src='signature-bed-image/prd3_1h.jpg' alt='con1'/>
                        </div>
                    </Link>
                </div>
                <div id='prd3_container2_g2'>
                    <Link to='/g2_03'>
                        <div className='fir_img'>
                            <div className='fir_txt'>
                                <p><VscAdd/></p>
                                <span>SIGNATURE G2</span>
                                <p>6T</p>
                            </div>
                            <img src='signature-bed-image/prd3_2.jpg' alt='con2'/>
                        </div>
                        <div className='sec_img'>
                            <img src='signature-bed-image/prd3_2h.jpg' alt='con2'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Product3;