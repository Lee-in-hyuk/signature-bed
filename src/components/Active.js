import React, { useState } from 'react';
import { ImYoutube } from 'react-icons/im';
import './active.scss';
import Modal from 'react-modal';

function Active() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div id='active_wrap'>
            <div id='active_hd'>
                <div className='hd_left'>
                    <strong>SIGNATURE ACTIVE 8T</strong>
                    <p>S/SS/Q</p>
                </div>
                <div className='hd_right'>
                    <span>690,000 ~</span>
                    <a href='https://smartstore.naver.com/sleepnsleep/products/5327048956?utm_source=SIGNATURE&utm_medium=evezary&utm_content=%26utm%5Fcontent%3D%7Bkeyword%7D&utm_campaign=8t' target='_blank'>
                    <div>구매하기</div></a>
                </div>
            </div>
            <div id='active_container1'>
                <div id='active_con1'>
                    <h1 className='ani_fir'>To competent person</h1><br/>
                    <h1 className='ani_sec'>“Luxury choice of competent people”</h1>
                </div>
                <img src='signature-bed-image/active_con1.jpg' alt='con1'/>
            </div>
            <div id='active_container2'>
                <span className='ani_fir'>“Early to bed and early to rise makes a man healthy, wealthy, and wise.” –Benjamin Franklin–</span><br/>
                <span className='ani_sec'>“일찍 자고, 일찍 일어 나는 것은 사람을 건강하고 부요하고, 지혜롭게 만든다.” -벤자민 프랭클린-</span>
            </div>
            <div id='active_container3'>
                <img src='signature-bed-image/active_con3.jpg' alt='con3'/>
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
                        <video src='signature-bed-image/active_video.mp4' width="800px" height="600px" controls/>
                    </Modal>
                </div>
            </div>
            <div id='video_sub_txt'><span>* 시그니처 액티브 디테일 영상</span></div>
            <div id='active_container4'>
                <img src='signature-bed-image/active_con4.jpg' alt='con4'/>
            </div>
            <div id='active_container5'>
                <img src='signature-bed-image/active_con5.jpg' alt='con5'/>
            </div>
            <div id='active_container6'>
                <img src='signature-bed-image/active_con6.jpg' alt='con6'/>
            </div>
            <div id='active_container7'>
                <div id='active_container7_txt'>
                    <h1>숙면을 지킬 수 있는 모든 가치를 담아</h1>
                    <span>편안함, 안정성, 스타일로 고유의 품격을 완성합니다<br/>
                    고객을 배려하는 퀄리티로 최상의 숙면을 선사합니다</span>
                </div>
                <img src='signature-bed-image/active_con7.jpg' alt='con7'/>
            </div>
            <div className='prd_info'>
                <h1>구매추가정보</h1>
                <div>
                    <details>
                        <summary>
                            추천 고객
                        </summary>
                        <ul className='subMenu'>
                            <li>모션베드, 고기능성 제품을 사용하는 분</li>
                            <li>잠자리 뒤척임이 심한 분</li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            소재
                        </summary>
                        <ul className='subMenu'>
                            <li>내부 : 시그니처 메모리폼 2T+ 시그니처 서스펜션폼 3T + 시그니처 서포트폼 3T</li>
                            <li>커버 : 면 80% 폴리에스터 20%</li>
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
                            <li>폼 : 세탁 금지</li>
                            <li>커버: 세탁가능/찬물 사용/중성세제 사용/세탁망 사용/건조기 금지</li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            크기
                        </summary>
                        <ul className='subMenu'>
                            <li>S : 100*200*80</li>
                            <li>SS : 110*200*80</li>
                            <li>Q : 150*200*80</li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            추천 제품
                        </summary>
                        <ul className='subMenu'>
                            <li>모션베드</li>
                            <li>시그니처 에어홀 베개</li>
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
}

export default Active;