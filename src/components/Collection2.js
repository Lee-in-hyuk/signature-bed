import React from 'react';
import './collection2.scss';
import { VscAdd } from "react-icons/vsc";

function Collection2() {
    return (
        <div id='col2_wrap'>
            <h1>SIGNATURE G2</h1>
            <div id='col2_container1'>
                <div id='col2_txt'>
                    <strong>The best bridge between despair<br/>and hope is a good night’s sleep</strong><br/>
                    <span>절망에서 희망으로 건너가는 최상의 다리는 밤에 좋은 잠을 자는 것이다</span>
                    <p>-E. Joseph Cossman-</p>
                    <span>조셉 코스만</span>
                </div>
                <img src='signature-bed-image/col2_01.png' alt='con1'/>
            </div>
            <div id='col2_container2'>
                <div id='col2_container2_left'>
                    <div id='left1'><img src='signature-bed-image/col2_left1.jpg' alt='con2'/></div>
                    <div id='left2'>
                        <div id='left2_bg'>
                            <div id='left2_txt'>
                                To passionate person<br/>
                                <p>Excellent<br/>choice of<br/>Passionate<br/>people</p>
                            </div>
                            <span>열정적인 사람들의 탁월한 선택</span>
                            <div id='left2_img'><img src='signature-bed-image/col2_left2.png' alt='con2'/></div>
                        </div>
                    </div>
                    <div id='left3'><img src='signature-bed-image/col2_left3.jpg' alt='con2'/></div>
                </div>
                <div id='col2_container2_right'>
                    <div id='right1'><img src='signature-bed-image/col2_right1.jpg' alt='con2'/></div>
                    <div id='right2'><img src='signature-bed-image/col2_right2.jpg' alt='con2'/></div>
                    <div id='right3'>
                        <div className='right3_img'><img src='signature-bed-image/col2_right3.jpg' alt='con2'/></div>
                        <div className='right3_img'><img src='signature-bed-image/col2_right4.jpg' alt='con2'/></div>
                    </div>
                </div>
            </div>
            <div id='col2_container3'>
                <div id='col2_container3_tp'>
                    <div className='fir_img'>
                        <div className='fir_txt'>
                            <p><VscAdd/></p>
                            <span>토퍼</span>
                            <p>4T</p>
                        </div>
                        <img src='signature-bed-image/col2_con3_1.jpg' alt='con3'/>
                    </div>
                    <div className='sec_img'>
                        <img src='signature-bed-image/col2_con3_1h.jpg' alt='con3'/>
                    </div>
                </div>
                <div id='col2_container3_al'>
                    <div className='fir_img'>
                        <div className='fir_txt'>
                            <p><VscAdd/></p>
                            <span>토퍼 매트리스<br/><strong>[일체형]</strong></span>
                            <p>6T</p>
                        </div>
                        <img src='signature-bed-image/col2_con3_2.jpg' alt='con3'/>
                    </div>
                    <div className='sec_img'>
                        <img src='signature-bed-image/col2_con3_2h.jpg' alt='con3'/>
                    </div>
                </div>
                <div id='col2_container3_fd'>
                    <div className='fir_img'>
                        <div className='fir_txt'>
                            <p><VscAdd/></p>
                            <span>토퍼 매트리스<br/><strong>[접이식]</strong></span>
                            <p>6T</p>
                        </div>
                        <img src='signature-bed-image/col2_con3_3.jpg' alt='con3'/>
                    </div>
                    <div className='sec_img'>
                        <img src='signature-bed-image/col2_con3_3h.jpg' alt='con3'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection2;