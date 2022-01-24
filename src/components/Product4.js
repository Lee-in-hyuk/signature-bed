import React, { useState } from 'react';
import { ImYoutube } from 'react-icons/im';
import './product4.scss';
import Modal from 'react-modal';
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

function Product4() {
    // 모달 상태변화 설정
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div id='prd4_wrap'>
            <div id='prd4_hd'>
                <div className='hd_left'>
                    <strong>MONGATA MOTION BED</strong>
                    <p>SS/Q</p>
                </div>
                <div className='hd_right'>
                    <span>1,400,000 ~</span>
                    {/* <a href='https://smartstore.naver.com/sleepnsleep/products/5329167977?utm_source=SIGNATURE&utm_medium=evezary&utm_content=%26utm%5Fcontent%3D%7Bkeyword%7D&utm_campaign=3t'>
                    <div>구매하기</div></a> */}
                </div>
            </div>
            <div id='prd4_container1'>
                {/* 텍스트 줄 마다 애니메이션 넣어보기 */}
                <h1>To signature bed person<br/>“Good frame with signature bed”</h1>
                <img src='signature-bed-image/prd4_con1.jpg' alt='con1'/>
            </div>
            <div id='prd4_container2'>
                {/* 텍스트 줄 마다 애니메이션 넣어보기 */}
                <span>“Sleep covers your eyes Good, evil, forgetting everything.” –Homer-<br/>
                “잠은 눈꺼풀을 덮어 선한 것, 악한 것, 모든 것을 잊게 하는 것.” –호메로스-</span>
            </div>
            <div id='prd4_container3'>
                <img src='signature-bed-image/prd4_con3.jpg' alt='con3'/>
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
                        <video src='signature-bed-image/Mongata video.mp4' width="800px" height="600px" controls/>
                    </Modal>
                </div>
            </div>
            <div id='video_sub_txt'><span>* 몽가타 모션베드 디테일 영상</span></div>
            <div id='prd4_container4'>
                <img src='signature-bed-image/prd4_con4.jpg' alt='con4'/>
            </div>
            <div id='prd4_container5'>
                <img src='signature-bed-image/prd4_con5.jpg' alt='con5'/>
            </div>
            <div id='prd4_container6'>
                <img src='signature-bed-image/prd4_con6_left.gif' alt='con6'/>
                <img src='signature-bed-image/prd4_con6_right.gif' alt='con6'/>
            </div>
            <div id='prd4_container7'>
                <img src='signature-bed-image/prd4_con7_left.gif' alt='con7'/>
                <img src='signature-bed-image/prd4_con7_right.gif' alt='con7'/>
            </div>
            <div id='prd4_container8'>
                <img src='signature-bed-image/prd4_con8.jpg' alt='con8'/>
            </div>
            <div id='prd4_container9'>
                <img src='signature-bed-image/prd4_con9.jpg' alt='con9'/>
            </div>
            <div id='prd4_container10'>
                <img src='signature-bed-image/prd4_con10.jpg' alt='con10'/>
            </div>
            <div id='prd4_container11'>
                <div id='prd4_container11_txt'>
                    <h1>숙면을 지킬 수 있는 모든 가치를 담아</h1>
                    <span>편안함, 안정성, 스타일로 고유의 품격을 완성합니다<br/>
                    고객을 배려하는 퀄리티로 최상의 숙면을 선사합니다</span>
                </div>
                <img src='signature-bed-image/prd4_con11.jpg' alt='con11'/>
            </div>
            <div className='prd_info'>
                <h1>구매추가정보</h1>
                <div>
                    <ul>
                        <li><p>추천 고객<span><VscChevronDown className='fir_svg'/><VscChevronUp className='sec_svg'/></span></p>
                            <ul>
                                <li>잠자리 뒤척임이 심한 분</li>
                                <li>허리와 척추가 약한 분</li>
                                <li>침대에서 여러가지 업무를 해야하는 분</li>
                            </ul>
                        </li>
                        <li><p>기술<span><VscChevronDown className='fir_svg'/><VscChevronUp className='sec_svg'/></span></p>
                            <ul>
                                <li>무소음 약 20dB</li>
                                <li>요람을 닮은 X-모션 기능</li>
                                <li>저주파수 수면 진동</li>
                                <li>달빛을 담은 라이팅</li>
                            </ul>
                        </li>
                        <li><p>인증<span><VscChevronDown className='fir_svg'/><VscChevronUp className='sec_svg'/></span></p>
                            <ul>
                                <li>라돈 안정 인증</li>
                                <li>전기용품 안전 인증</li>
                                <li>전자파 적합성 인증</li>
                            </ul>
                        </li>
                        <li><p>A/S 정책<span><VscChevronDown className='fir_svg'/><VscChevronUp className='sec_svg'/></span></p>
                            <ul>
                                <li>몽가타 본사 제품과 동일한 서비스 적용</li>
                                <li>프레임: 60개월 / 모터 및 부품:1년 (설치일 기준, 경우에 따라 유상/무상으로 서비스)</li>
                                <li>*자세한 정책은 몽가타 고객센터 (1522-6248)를 통해 확인 가능합니다.</li>
                            </ul>
                        </li>
                        <li><p>크기<span><VscChevronDown className='fir_svg'/><VscChevronUp className='sec_svg'/></span></p>
                            <ul>
                                <li><strong>바운서</strong></li>
                                <li>SS:1520*2100*1000 (그레이)</li>
                                <li>Q:1820*2100*1000 (네이비)</li>
                                <li><strong>모션베드</strong></li>
                                <li>SS:1520*2100*1000 (그레이)</li>
                                <li>Q:1820*2100*1000 (네이비)</li>
                            </ul>
                        </li>
                        <li><p>추천 제품<span><VscChevronDown className='fir_svg'/><VscChevronUp className='sec_svg'/></span></p>
                            <ul>
                                <li>몽가타 수면센서</li>
                                <li>시그니처 액티브</li>
                                <li>시그니처 G2</li>
                                <li>시그니처 베이직</li>
                            </ul>
                        </li>
                        <li><p>주의 사항<span><VscChevronDown className='fir_svg'/><VscChevronUp className='sec_svg'/></span></p>
                            <ul>
                                <li>유아나 애완동물이 프레임 후면에 들어가지 않도록 주의</li>
                                <li>어린이의 경우 단독으로 모션베드를 작동하지 않도록 주의</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Product4;