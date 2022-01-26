import React, { useState } from 'react';
import { ImYoutube } from 'react-icons/im';
import './basic1.scss';
import Modal from 'react-modal';

function Basic1() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div id='basic1_wrap'>
            <div id='basic1_hd'>
                <div className='hd_left'>
                    <strong>SIGNATURE BASIC 3T</strong>
                    <p>S/SS/Q</p>
                </div>
                <div className='hd_right'>
                    <span>380,000 ~</span>
                    <a href='https://smartstore.naver.com/sleepnsleep/products/5329167977?utm_source=SIGNATURE&utm_medium=evezary&utm_content=%26utm%5Fcontent%3D%7Bkeyword%7D&utm_campaign=3t' target='_blank'>
                    <div>구매하기</div></a>
                </div>
            </div>
            <div id='basic1_container1'>
                <div id='basic1_con1'>
                    <h1 className='ani_fir'>To smart person</h1><br/>
                    <h1 className='ani_sec'>“Reasonable choice of smart people”</h1>
                </div>
                <img src='signature-bed-image/basic1_con1.jpg' alt='con1'/>
            </div>
            <div id='basic1_container2'>
                
            </div>
            <div id='basic1_container3'>
                
            </div>
            <div id='basic1_container4'>
                
            </div>
            <div id='basic1_container5'>
                
            </div>
            <div id='basic1_container6'>
                
            </div>
            <div id='basic1_container7'>
                
            </div>
            <div className='prd_info'>

            </div>
        </div>
    );
}

export default Basic1;