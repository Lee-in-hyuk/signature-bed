import React, { useState } from 'react';
import './board.scss';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import axios from 'axios';
import { BiSearch } from "react-icons/bi";
import BoardList from './BoardList';
import CreateBoard from './CreateBoard';
import Modal from 'react-modal';

function Board({sampleData}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return (
        <div id='board_wrap'>
            <h1>Product List</h1>
            {/* 새로운 타이틀의 상품이 추가되면 datalist 안에 option 추가하기 */}
            <div id='board_hd'>
                <input type="text" list='prd_options' placeholder='Search...'/>
                <datalist id="prd_options">
                    <option value="basic"/>
                    <option value="g2"/>
                    <option value="active"/>
                    <option value="topper"/>
                    <option value="matress(all-in-one)"/>
                    <option value="matress(foldable)"/>
                    <option value="motion bed"/>
                </datalist>
                <button><BiSearch/></button>
            </div>
            <Table id='board_tb'>
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>날짜</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* 나중에 map써서 db에 있는 데이터 받아오기 */}
                    {sampleData.map(data=>(
                        <BoardList data={data} key={data.no}/>
                    ))}
                </TableBody>
            </Table>
            <div id='board_ft'>
                <div id='page_num'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
            </div>
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
                          backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        },
                        content: {
                            position: 'absolute',
                            top: 'calc(50% - 300px)',
                            left: 'calc(50% - 400px)',
                            border:'none',
                            background: 'none',
                            WebkitOverflowScrolling: 'touch',
                            overflow: 'unset',
                            width:'500px',
                            height: '520px',
                            backgroundColor: '#fff',
                            border: '1px solid #eee',
                            borderRadius: '10px'
                        }
                      }}
                    >
                    <CreateBoard/>
                </Modal>
            </div>
            <span onClick={()=> setModalIsOpen(true)}>글쓰기</span>
        </div>
    );
}

export default Board;