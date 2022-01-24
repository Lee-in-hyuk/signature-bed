import React from 'react';
import './product2.scss';
import { VscAdd } from "react-icons/vsc";

function Product1() {
    return (
        <div id='prd2_wrap'>
            <h1>토퍼매트리스</h1>
            <p>일체형</p>
            <div id='prd2_container'>
                <div id='prd2_container1_bs'>
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
                </div>
                <div id='prd2_container2_g2'>
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
                </div>
                <div id='prd2_container2_at'>
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
                </div>
            </div>
        </div>
    );
}

export default Product1;