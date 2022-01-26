import React from 'react';
import './collection1.scss';
import { VscAdd } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Collection1() {
    return (
        <div id='col1_wrap'>
            <h1>SIGNATURE BASIC</h1>
            <div id='col1_container1'>
                <div id='col1_txt'>
                    <strong>We are such stuff As dreams are made on,<br/>and our little life Is rounded with a sleep</strong><br/>
                    <span>우리는 꿈의 재료이며 우리의 짧은 인생은 잠으로 둘러싸여 있다</span>
                    <p>-William Shakespeare-</p>
                    <span>셰익스피어</span>
                </div>
                <img src='signature-bed-image/col1_01.png' alt='con1'/>
            </div>
            <div id='col1_container2'>
                <div id='col1_container2_left'>
                    <div id='left1'><img src='signature-bed-image/col1_left1.jpg' alt='con2'/></div>
                    <div id='left2'>
                        <div id='left2_bg'>
                            <div id='left2_txt'>
                                To smart person<br/>
                                <p>Reasonable<br/>choice<br/>of<br/>Smart people</p>
                            </div>
                            <span>똑똑한 사람들의 합리적인 선택</span>
                            <div id='left2_img'><img src='signature-bed-image/col1_left2.png' alt='con2'/></div>
                        </div>
                    </div>
                    <div id='left3'><img src='signature-bed-image/col1_left3.jpg' alt='con2'/></div>
                </div>
                <div id='col1_container2_right'>
                    <div id='right1'><img src='signature-bed-image/col1_right1.jpg' alt='con2'/></div>
                    <div id='right2'><img src='signature-bed-image/col1_right2.jpg' alt='con2'/></div>
                    <div id='right3'>
                        <div className='right3_img'><img src='signature-bed-image/col1_right3.jpg' alt='con2'/></div>
                        <div className='right3_img'><img src='signature-bed-image/col1_right4.jpg' alt='con2'/></div>
                    </div>
                </div>
            </div>
            <div id='col1_container3'>
                <div id='col1_container3_tp'>
                    <Link to='/basic1'>
                        <div className='fir_img'>
                            <div className='fir_txt'>
                                <p><VscAdd/></p>
                                <span>토퍼</span>
                                <p>3T</p>
                            </div>
                            <img src='signature-bed-image/col1_con3_1.jpg' alt='con3'/>
                        </div>
                        <div className='sec_img'>
                            <img src='signature-bed-image/col1_con3_1h.jpg' alt='con3'/>
                        </div>
                    </Link>
                </div>
                <div id='col1_container3_al'>
                    <Link to='/basic2'>
                        <div className='fir_img'>
                            <div className='fir_txt'>
                                <p><VscAdd/></p>
                                <span>토퍼 매트리스<br/><strong>[일체형]</strong></span>
                                <p>5.5T</p>
                            </div>
                            <img src='signature-bed-image/col1_con3_2.jpg' alt='con3'/>
                        </div>
                        <div className='sec_img'>
                            <img src='signature-bed-image/col1_con3_2h.jpg' alt='con3'/>
                        </div>
                    </Link>
                </div>
                <div id='col1_container3_fd'>
                    <Link to='/basic3'>
                        <div className='fir_img'>
                            <div className='fir_txt'>
                                <p><VscAdd/></p>
                                <span>토퍼 매트리스<br/><strong>[접이식]</strong></span>
                                <p>5T</p>
                            </div>
                            <img src='signature-bed-image/col1_con3_3.jpg' alt='con3'/>
                        </div>
                        <div className='sec_img'>
                            <img src='signature-bed-image/col1_con3_3h.jpg' alt='con3'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Collection1;