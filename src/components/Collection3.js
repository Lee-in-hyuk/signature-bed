import React from 'react';
import './collection3.scss';
import { VscAdd } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Collection3() {
    return (
        <div id='col3_wrap'>
            <h1>SIGNATURE ACTIVE</h1>
            <div id='col3_container1'>
                <div id='col3_txt'>
                    <strong>Early to bed and early to rise makes a man<br/>healthy, wealthy, and wise</strong><br/>
                    <span>일찍 자고, 일찍 일어 나는 것은 사람을 건강하고 부유하고, 지혜롭게 만든다</span>
                    <p>-Benjamin Franklin-</p>
                    <span>벤자민 프랭클린</span>
                </div>
                <img src='signature-bed-image/col3_01.png' alt='con1'/>
            </div>
            <div id='col3_container2'>
                <div id='col3_container2_left'>
                    <div id='left1'><img src='signature-bed-image/col3_left1.jpg' alt='con2'/></div>
                    <div id='left2'>
                        <div id='left2_bg'>
                            <div id='left2_txt'>
                                To competent person<br/>
                                <p>Luxuary<br/>choice of<br/>Competent<br/>people</p>
                            </div>
                            <span>유능한 사람들의 고급스러운 선택</span>
                            <div id='left2_img'><img src='signature-bed-image/col3_left2.png' alt='con2'/></div>
                        </div>
                    </div>
                    <div id='left3'><img src='signature-bed-image/col3_left3.jpg' alt='con2'/></div>
                </div>
                <div id='col3_container2_right'>
                    <div id='right1'><img src='signature-bed-image/col3_right1.jpg' alt='con2'/></div>
                    <div id='right2'><img src='signature-bed-image/col3_right2.jpg' alt='con2'/></div>
                    <div id='right3'>
                        <div className='right3_img'><img src='signature-bed-image/col3_right3.jpg' alt='con2'/></div>
                        <div className='right3_img'><img src='signature-bed-image/col3_right4.jpg' alt='con2'/></div>
                    </div>
                </div>
            </div>
            <div id='col3_container3'>
                <div id='col3_container3_tp'>
                    <Link to='/active'>
                        <div className='fir_img'>
                            <div className='fir_txt'>
                                <p><VscAdd/></p>
                                <span>토퍼매트리스</span>
                                <p>8T</p>
                            </div>
                            <img src='signature-bed-image/col3_con3_1.jpg' alt='con3'/>
                        </div>
                        <div className='sec_img'>
                            <img src='signature-bed-image/col3_con3_1h.jpg' alt='con3'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Collection3;