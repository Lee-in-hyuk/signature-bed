import React, { useState } from 'react';
import { ImYoutube } from 'react-icons/im';
import './g2_03.scss';
import Modal from 'react-modal';

function G2_03() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div id='g2_03_wrap'>
            <div id='g2_03_hd'>
                <div className='hd_left'>
                    <strong>SIGNATURE G2 FOLDING 6T</strong>
                    <p>S/SS/Q</p>
                </div>
                <div className='hd_right'>
                    <span>700,000 ~</span>
                    <a href='https://smartstore.naver.com/sleepnsleep/products/5327278758?utm_source=SIGNATURE&utm_medium=evezary&utm_content=%26utm_content%3D%7Bkeyword%7D&utm_campaign=%EC%82%BC%EB%8B%A86t' target='_blank'>
                    <div>구매하기</div></a>
                </div>
            </div>
            <div id='g2_03_container1'>
                <div id='g2_03_con1'>
                    <h1 className='ani_fir'>To passionate person</h1><br/>
                    <h1 className='ani_sec'>“Excellent choice of passionate people”</h1>
                </div>
                <img src='signature-bed-image/g2_03_con1.jpg' alt='con1'/>
            </div>
            <div id='g2_03_container2'>
                <span className='ani_fir'>“The best bridge between despair and hope is a good night’s sleep.” –E. Joseph Cossman-</span><br/>
                <span className='ani_sec'>“절망에서 희망으로 건너가는 최상의 다리는 밤에 좋은 잠을 자는 것이다.” –조셉 코스만-</span>
            </div>
            <div id='g2_03_container3'>
                <img src='signature-bed-image/g2_03_con3.jpg' alt='con3'/>
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
                        <video src='signature-bed-image/g2_video.mp4' width="800px" height="600px" controls/>
                    </Modal>
                </div>
            </div>
            <div id='video_sub_txt'><span>* 시그니처 G2 디테일 영상</span></div>
            <div id='g2_03_container4'>
                <img src='signature-bed-image/g2_03_con4.jpg' alt='con4'/>
            </div>
            <div id='g2_03_container5'>
                <img src='signature-bed-image/g2_03_con5.jpg' alt='con5'/>
            </div>
            <div id='g2_03_container6'>
                <img src='signature-bed-image/g2_03_con6.jpg' alt='con6'/>
            </div>
            <div id='g2_03_container7'>
                <div id='g2_03_container7_txt'>
                    <h1>숙면을 지킬 수 있는 모든 가치를 담아</h1>
                    <span>편안함, 안정성, 스타일로 고유의 품격을 완성합니다<br/>
                    고객을 배려하는 퀄리티로 최상의 숙면을 선사합니다</span>
                </div>
                <img src='signature-bed-image/g2_03_con7.jpg' alt='con7'/>
            </div>
            <div className='prd_info'>
                <h1>구매추가정보</h1>
                <div>
                    <details>
                        <summary>
                            추천 고객
                        </summary>
                        <ul className='subMenu'>
                            <li>신체에 열이 많아 온도에 민감한 분</li>
                            <li>패셔너블한 디자인을 선호하는 분</li>
                            <li>바닥 사용 혹은 휴대용으로 사용을 원하는 분</li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            소재
                        </summary>
                        <ul className='subMenu'>
                            <li>내부 : 시그니처 쿨겔/흑연 특수폼 3T+ 시그니처 서포트폼 3T</li>
                            <li>커버 : 체온조절 원사 30% +면 24% + 폴리에스터 46%</li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            검사 인증
                        </summary>
                        <ul className='subMenu'>
                            <li>접착제 : 그린가드 인증 (스위스 친환경 접착제), 오코텍스 인증 (유럽 친환경 인증)</li>
                            <li>안전검사 : 라돈, 중금속, TVOC 안전 인증</li>
                            <li>테스트 : 80,000회 줄음률 인증 (내구성 테스트)</li>
                            <li>폼 : CertiPUR 인증</li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            방수 및 보관방법
                        </summary>
                        <ul className='subMenu'>
                            <li>방수 : 방수커버 포함</li>
                            <li>* 3개의 방수 커버와 3개의 폼이 분리 가능</li>
                            <li>폼 : 세탁 금지</li>
                            <li>커버: 세탁가능/찬물 사용/중성세제 사용/세탁망 사용/건조기 금지</li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            크기
                        </summary>
                        <ul className='subMenu'>
                            <li>S : 100*200*60</li>
                            <li>SS : 110*200*60</li>
                            <li>Q : 150*200*60</li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            추천 제품
                        </summary>
                        <ul className='subMenu'>
                            <li>시그니처 G2 베개</li>
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
}

export default G2_03;