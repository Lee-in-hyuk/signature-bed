import React from 'react';
import './store.scss';
import { VscClose } from "react-icons/vsc";
import { FaMapMarkerAlt } from "react-icons/fa";

function Store() {
    return (
        <div id='store_wrap'>
            <h1>STORE</h1>
            <div id='store_container1'>
                <div id='store_con1_txt'>
                    <span className='ani_fir'>시그니처베드 <VscClose/> 아주대 병원</span>
                    <h1 className='ani_sec'>플래그십 스토어</h1>
                    <p>“ 모두가 전문 수면 컨설팅을 경험하고, 숙면을 통해 건강한 삶으로 변화할 수 있도록 ”</p>
                </div>
                <div id='store_con1_img'><img src='signature-bed-image/store_con1.jpg' alt='con1'/></div>
            </div>
            <div id='store_container2'>
                <div id='store_con2_left'>
                    <div id='con2_img_lf'>
                        <img src='signature-bed-image/store_con2_left1.jpg' alt='con2'/>
                        <img src='signature-bed-image/store_con2_left2.jpg' alt='con2'/>
                    </div>
                    <div id='con2_img_rg'>
                        <img src='signature-bed-image/store_con2_right.jpg' alt='con2'/>
                    </div>
                </div>
                <div id='store_con2_right'>
                    <img src='signature-bed-image/store_con2_txtimg.png' alt='con2'/>
                </div>
            </div>
            <div id='store_container3'>
                <div id='store_con3_txt'>
                    <h1>SIGNATURE BED</h1>
                    <strong>Store</strong><br/>
                    <p>전국 슬립앤슬립 매장에서 만나보실 수 있습니다<br/>
                    국내 침구 브랜드 인지도 1위 이브자리도 함께합니다</p>
                </div>
                <a href='https://company.evezary.co.kr/store/info/' target="_blank" id='store_con3_url'><FaMapMarkerAlt/> 체험 매장 찾기</a>
                <img src='signature-bed-image/store_con3.jpg' alt='con3'/>
            </div>
        </div>
    );
}

export default Store;