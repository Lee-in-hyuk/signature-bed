import React from 'react';
import { Carousel } from "antd";
import 'antd/dist/antd.min.css';
import { ImYoutube } from 'react-icons/im';
import './main.scss';

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
                <div id='con_text' className='container1'>
                    <h2>The best foam</h2>
                    <h3>최상의 폼</h3>
                    <h2>Optimal layer</h2>
                    <h3>최적의 비율</h3>
                    <h2>Perfect sleep</h2>
                    <h3>완벽한 숙면</h3>
                </div>
                <div id='con_img' className='container1'>
                    <img src='signature-bed-image/container1.jpg' alt='video'/>
                    <a href='https://youtu.be/3xfTtMlKcWs'><span><ImYoutube/></span></a>
                    {/* <video src='https://youtu.be/3xfTtMlKcWs' width="600px" height="400px" controls><span><ImYoutube/></span></video> */}
                </div>
            </div>
        </div>
    );
}

export default Main;