import React, { useState } from 'react';
import Modal from 'react-modal';

// 모달 테스트 용도
// useState를 이용해서 상태값을 주고, Modal의 isOpen속성에 초기값인 fasle가 들어가게 해서 처음엔 안 보이게 설정
// 버튼 클릭 시 상태변화값으로 isOpen에 true가 들어가게 해서 Modal이 보이게 설정
// 또 다른 속성인 onRequestClose을 사용해서 오버레이 부분을 클릭하거나 ESC키를 누르면 모달 창이 닫히게 설정
function Test() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <button onClick={()=> setModalIsOpen(true)}>Modal Open</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                This is Modal content
                {/* <video src='signature-bed-image/video.mp4' width="1200px" height="800px" controls/> */}
                <button onClick={()=> setModalIsOpen(false)}>Modal Close</button>
            </Modal>
        </div>
    );
}

export default Test;