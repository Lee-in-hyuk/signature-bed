import React, { useState } from 'react';
import { Carousel } from "antd";
import 'antd/dist/antd.min.css';
import { ImYoutube } from 'react-icons/im';
import { VscClose } from "react-icons/vsc";
import './main.scss';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

function Main() {
    // 모달 상태변화 설정
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div id='wrap'>
            <div className='slide-image'>
                <Carousel autoplay={true} autoplaySpeed={3000} effect="fade">
                    <Link to='/collection3'><div><img src='signature-bed-image/slide-image01.jpg' alt='bed1'/></div></Link>
                    <Link to='/collection2'><div><img src='signature-bed-image/slide-image02.jpg' alt='bed2'/></div></Link>
                    <Link to='/collection1'><div><img src='signature-bed-image/slide-image03.jpg' alt='bed3'/></div></Link>
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
                    <span onClick={()=> setModalIsOpen(true)}><ImYoutube/></span>
                    <div id='modal'>
                        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                        ariaHideApp={false}
                        style={{
                            overlay: {
                              position: 'fixed',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundColor: 'rgba(255, 255, 255, 0.5)'
                            },
                            content: {
                              position: 'absolute',
                              top: 'calc(50% - 300px)',
                              left: 'calc(50% - 400px)',
                              border:'none',
                              background: 'none',
                              WebkitOverflowScrolling: 'touch',
                              overflow: 'unset',
                              width:'300px',
                              height: '300px',
                            }
                          }}
                        >
                            <video src='signature-bed-image/video.mp4' width="800px" height="600px" controls/>
                        </Modal>
                    </div>
                </div>
            </div>
            <div id='container02'>
                <h1>COLLECTION</h1>
                <div className='container2'>
                    <div id='con2_left'>
                        <Link to='/collection1'>
                            <div className='con2_child'>
                                <div id='con2_text1'>
                                    <h3>SIGNATURE BASIC</h3>
                                    <span>똑똑한 사람들의 합리적인 선택</span>
                                </div>
                                <img src='signature-bed-image/container2-1.jpg' alt='con2-1'/>
                            </div>
                        </Link>
                    </div>
                    <div id='con2_right'>
                        <Link to='/collection3'>
                            <div className='con2_child'>
                                <div id='con2_text2'>
                                    <h3>SIGNATURE ACTIVE</h3>
                                    <span>유능한 사람들의 고급스러운 선택</span>
                                </div>
                                <img src='signature-bed-image/container2-2.jpg' alt='con2-2'/>
                            </div>
                        </Link>
                        <Link to='/collection2'>
                            <div className='con2_child'>
                                <div id='con2_text3'>
                                    <h3>SIGNATURE G2</h3>
                                    <span>열정적인 사람들의 탁월한 선택</span>
                                </div>
                                <img src='signature-bed-image/container2-3.jpg' alt='con2-3'/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div id='container03'>
                <h1>PRODUCTS</h1>
                <div className='container3'>
                    <Link to='/product1'>
                        <div id='con3_1' className='con3_child'>
                            <h3>TOPPER</h3>
                            <img src='signature-bed-image/container3-1.jpg' alt='con3-1'/>
                        </div>
                    </Link>
                    <Link to='/product2'>
                        <div id='con3_2' className='con3_child'>
                            <h3>TOPPER<br/>MATTRESS</h3>
                            <img src='signature-bed-image/container3-2.jpg' alt='con3-2'/>
                        </div>
                    </Link>
                    <Link to='/product4'>
                        <div id='con3_3' className='con3_child'>
                            <h3>MOTION<br/>BED</h3>
                            <img src='signature-bed-image/container3-3.jpg' alt='con3-3'/>
                        </div>
                    </Link>
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
                            <span>SIGNATURE BED <VscClose/> 수면환경연구소</span>
                            <h2>SLEEP STUDIO</h2>
                            <p>작은 것 하나까지 세심하게 고민해 만든 제품.<br/>
                            바라는 것은 단 하나 시그니처베드와 함께 완벽한 숙면을 하는 것.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;