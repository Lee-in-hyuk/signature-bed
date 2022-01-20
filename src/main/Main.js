import React from 'react';
import { Carousel } from "antd";
import 'antd/dist/antd.min.css';
import { ImYoutube } from 'react-icons/im';
import './main.scss';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div id='wrap'>
            <div className='slide-image'>
                <Carousel autoplay={true} autoplaySpeed={3000} effect="fade">
                    <div><img src='signature-bed-image/slide-image01.jpg' alt='bed1'/></div>
                    <div><img src='signature-bed-image/slide-image02.jpg' alt='bed2'/></div>
                    <div><img src='signature-bed-image/slide-image03.jpg' alt='bed3'/></div>
                </Carousel>
            </div>
            <div id='container01'>
                <div id='con_text01' className='container1'>
                    <h2>The best foam</h2>
                    <h3>최상의 폼</h3>
                    <h2>Optimal layer</h2>
                    <h3>최적의 비율</h3>
                    <h2>Perfect sleep</h2>
                    <h3>완벽한 숙면</h3>
                </div>
                <div id='con_img01' className='container1'>
                    <img src='signature-bed-image/container1.jpg' alt='video'/>
                    {/* <a href='https://youtu.be/3xfTtMlKcWs'><span><ImYoutube/></span></a> */}
                    <Link to="/Video"><span><ImYoutube/></span></Link>
                </div>
            </div>
            <div id='container02'>
                <h1>COLLECTION</h1>
                <div className='container2'>
                    <div id='con2_left'>
                        <div className='con2_child'>
                            <div id='con2_text1'>
                                <h3>SIGNATURE BASIC</h3>
                                <span>똑똑한 사람들의 합리적인 선택</span>
                            </div>
                            <img src='signature-bed-image/container2-1.jpg' alt='con2-1'/>
                        </div>
                    </div>
                    <div id='con2_right'>
                        <div className='con2_child'>
                            <div id='con2_text2'>
                                <h3>SIGNATURE ACTIVE</h3>
                                <span>유능한 사람들의 고급스러운 선택</span>
                            </div>
                            <img src='signature-bed-image/container2-2.jpg' alt='con2-2'/>
                        </div>
                        <div className='con2_child'>
                            <div id='con2_text3'>
                                <h3>SIGNATURE G2</h3>
                                <span>열정적인 사람들의 탁월한 선택</span>
                            </div>
                            <img src='signature-bed-image/container2-3.jpg' alt='con2-3'/>
                        </div>
                    </div>
                </div>
            </div>
            <div id='container03'>
                <h1>PRODUCTS</h1>
                <div className='container3'>
                    <div id='con3_1' className='con3_child'>
                        <h3>TOPPER</h3>
                        <img src='signature-bed-image/container3-1.jpg' alt='con3-1'/>
                    </div>
                    <div id='con3_2' className='con3_child'>
                        <h3>TOPPER<br/>MATTRESS</h3>
                        <img src='signature-bed-image/container3-2.jpg' alt='con3-2'/>
                    </div>
                    <div id='con3_3' className='con3_child'>
                        <h3>MOTION<br/>BED</h3>
                        <img src='signature-bed-image/container3-3.jpg' alt='con3-3'/>
                    </div>
                </div>
            </div>
            <div id='container04'>
                <h1>LAB</h1>
                <div className='container4'>
                    <div id='con4_left'>
                        <img src='signature-bed-image/container4-1.gif' alt='con4-1'/>
                    </div>
                    <div id='con4_right'>
                        <img src='signature-bed-image/container4-2.jpg' alt='con4-2'/>
                        <div id='con4_text'>
                            <div id='text4'>
                                {/* 텍스트, 아이콘, 텍스트 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;