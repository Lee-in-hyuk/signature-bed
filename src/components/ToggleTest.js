import React,{ useState } from 'react';
import './toggletest.scss';

function ToggleTest() {
    // const[ open, setOpen ] = useState(false);
    // function onToggle(){
    //     setOpen(!open);
    // }
    const [open,setOpen] = useState(
        [
            {
                num: 1,
                idDone:false
            },
            {
                num: 2,
                idDone:false
            },
            {
                num: 3,
                idDone:false
            },
            {
                num: 4,
                idDone:false
            }
        ]
    );
    const list = open[0];
    function onToggle(num){
        //클릭할 때마다 open값이 변경되게
        setOpen(open.map(()=>list.num === num ? list.idDone: !list.idDone));
        console.log(open[0].num);   // 1
        console.log(open[0].idDone);// false
        console.log(list);          // arr
    }
    return (
        <div>
            {/* {open.map(list=>
                <ul num={list.num}>
                    <li>잠자리 뒤척임이 심한 분</li>
                    <li>허리와 척추가 약한 분</li>
                    <li>침대에서 여러가지 업무를 해야하는 분</li>
                </ul>
            )}
            <span onClick={onToggle} open={open[0].idDone}>버튼용</span><br/>
            {open.map(list=>
                <ul num={list.num}>
                    <li>잠자리 뒤척임이 심한 분</li>
                    <li>허리와 척추가 약한 분</li>
                    <li>침대에서 여러가지 업무를 해야하는 분</li>
                </ul>
            )}
            <span onClick={onToggle} open={open[1].idDone}>2번째 버튼용</span> */}
            {/* className={open ? "show-menu" : "hide-menu"} */}
            <span onClick={()=>onToggle()} open={open}>버튼</span>
            {open &&
                <ul >
                    <li>잠자리 뒤척임이 심한 분</li>
                    <li>허리와 척추가 약한 분</li>
                    <li>침대에서 여러가지 업무를 해야하는 분</li>
                </ul>
            }
            <span onClick={()=>onToggle()} open={open}>2번째 버튼</span>
            {open &&
                <ul >
                    <li>잠자리 뒤척임이 심한 분</li>
                    <li>허리와 척추가 약한 분</li>
                    <li>침대에서 여러가지 업무를 해야하는 분</li>
                </ul>
            }
        </div>
    );
}

export default ToggleTest;