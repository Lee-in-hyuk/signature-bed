import React, { useState } from 'react';
import './board.scss';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import axios from 'axios';
import useAsync from '../../hooks/useAsync';
import { BiSearch } from "react-icons/bi";
import BoardList from './BoardList';
import CreateBoard from './CreateBoard';
import Modal from 'react-modal';
import Pagination from './Pagination';


function Board() {
    // 페이지네이션 작업
    // const [board, setPosts] = useState([]);
    // // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    function currentPosts(tmp) {
            let currentPosts = 0;
            currentPosts = tmp.slice(indexOfFirst, indexOfLast);
            return currentPosts;
        }
        // // console.log(indexOfFirst);
    async function getBoards(){
        const response = await axios.get('http://localhost:8080/board')
        // return setPosts(response.data);
        return response.data;
    }
    // 모달 작업
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const state = useAsync(getBoards);
    const { loading, error, data:board } = state;
    console.log(board)
    // 로딩중이라면 ?
    if(loading) return <div>로딩중....</div>
    // 에러가 발생했다면 ?
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    // 데이터가 없으면 ?
    if(!board) return null;
    // 위에 작성한 if문들이 모두 아니면 !
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
                    <option value="mattress"/>
                    <option value="mattress(all-in-one)"/>
                    <option value="mattress(foldable)"/>
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
                    {/* {board.map(data=>(
                        <BoardList data={data} key={data.no}/>
                    ))} */}
                    <BoardList board={currentPosts(board)} key={board.no}/>
                </TableBody>
            </Table>
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
                            borderRadius: '10px'
                        }
                      }}
                    >
                    <CreateBoard/>
                </Modal>
            </div>
            <div id='enroll_btn'>
                <span onClick={()=> setModalIsOpen(true)}>글쓰기</span>
            </div>
            <div id='board_ft'>
                {/* Pagination넣을 부분 */}
                <Pagination  postsPerPage={postsPerPage} totalPosts={board.length} paginate={setCurrentPage}/>
                {/* <div id='page_num'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div> */}
            </div>
        </div>
    );
}

export default Board;