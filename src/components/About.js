import React from 'react';
import './about.scss';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div id='about_wrap'>
            <h1>ABOUT</h1>
            <div id='about_container1'>
                <div id='about_con1_img'>
                    <div id='ab_con1_img_lf'>
                        <img src='signature-bed-image/about_con1_left1.jpg' alt='con1'/>
                        <div id='ab_con1_img_lf2'>
                            <img src='signature-bed-image/about_con1_left2.jpg' alt='con1'/>
                            <span>최고만을 담은 전문가 토퍼</span>
                        </div>
                    </div>
                    <div id='ab_con1_img_rg'>
                        <img src='signature-bed-image/about_con1_right.jpg' alt='con1'/>
                    </div>
                </div>
                <div id='about_con1_txt'>
                    <h1>SLEEP STUDIO</h1>
                    <p>
                        시그니처베드 슬립스튜디오는<br/>
                        끊임없는 혁신을 통해 고객의 아름답고<br/>
                        건강한 수면 문화를 위한 종합 솔루션 제공을<br/>
                        목표로 합니다<br/><br/>
                        슬립스튜디오는 더 건강한 수면 환경 제안을 위해<br/>
                        2003년 침구 업계 최초로 설립된 연구소입니다<br/><br/>
                        수면 컨설턴트의 상담과 체험을 통해<br/>
                        고객에게 가장 잘 맞는 침구를 제안하고<br/>
                        개인별 매칭이 가능한 기능성 침구를<br/>
                        개발해 수면 환경을 개선하는<br/>
                        <strong>Total sleep care center</strong>입니다
                    </p>
                </div>
            </div>
            <div id='about_container2'>
                <div id='about_con2'>
                    <div id='about_con2_txt'>
                        <h1>시그니처라인</h1>
                        <div>체압분산, 수면온도, 수면환경에 따라<br/>
                            최고급 소재와 기술로 만든<br/>
                            프리미엄 토퍼 라인입니다.
                        </div>
                        <p>
                            <strong>SLEEP STUDIO</strong>의 체험 컨설팅과<br/>
                            솔루션데이터를 기반으로<br/>
                            기능과 소재를 엄선해 제작한<br/>
                            최고급 수면 제품 라인입니다.
                        </p>
                    </div>
                    <div id='about_con2_img'>
                        <img src='signature-bed-image/about_con2.jpg' alt='con2'/>
                    </div>
                </div>
            </div>
            <div id='about_container3'>
                <div id='about_con3'>
                    <div id='about_con3_img'>
                        <img src='signature-bed-image/about_con3.jpg' alt='con3'/>
                    </div>
                    <div id='about_con3_txt'>
                        <div className='url_txt'>
                            <Link to='/collection1'>
                                <header>SIGNATURE ACTIVE</header>
                                <p>고기능성 제품과 모션베드 최적화 토퍼<br/>
                                    독립 폼스프링 방식의 탁월한 기능
                                </p>
                                <footer>
                                    <span className='span_before'></span>
                                    <span>MORE</span>
                                    <span className='span_after'></span>
                                </footer>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id='about_container4'>

            </div>
            <div id='about_container5'>

            </div>
        </div>
    );
}

export default About;