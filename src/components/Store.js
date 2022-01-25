import React from 'react';
import './store.scss';
import { VscClose } from "react-icons/vsc";

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
                
            </div>
            <div id='store_container3'>
                
            </div>
        </div>
    );
}

export default Store;