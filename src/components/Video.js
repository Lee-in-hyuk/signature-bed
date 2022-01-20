import React from 'react';
import { VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Video() {
    return (
        <div id='video_div'>
            <Link to='/'><span><VscClose/></span></Link>
            <video src='signature-bed-image/video.mp4' width="1200px" height="800px" controls/>
        </div>
    );
}

export default Video;