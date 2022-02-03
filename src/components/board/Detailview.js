import React from 'react';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAsync from '../../hooks/useAsync';
import './detailview.scss';

function Detailview() {
    const navigate = useNavigate();
    const param = useParams();
    const { id } = param;
    // console.log(param);
    async function getBoard(){
        const response = await axios.get(
            `http://localhost:8080/board/${id}`
        )
        // console.log(response.data);
        return response.data;
    }
    const state = useAsync(getBoard);
    const { loading, error, data:board } = state;
    // console.log(board);
    if(loading) return <div>로딩중.......</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!board) return null;
    return (
        <div id='detail_wrap'>
            <h1>상품 상세 정보</h1>
            <Table id="detail_tb">
                <TableBody>
                    <TableRow>
                        <TableCell>제목</TableCell>
                        <TableCell>{board[0].title}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>설명</TableCell>
                        <TableCell>{board[0].description}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>등록일</TableCell>
                        <TableCell>{board[0].date}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div id='detail_btn'>
                {/* <button><Link to={`/edit/${board[0].c_no}`}>수정하기</Link></button>
                <button onClick={onDelete}>삭제</button> */}
                <button onClick={(e)=>(e.preventDefault())}><Link to='/board'>리스트보기</Link></button>
            </div>
        </div>
    );
}

export default Detailview;