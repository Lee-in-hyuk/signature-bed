import React from 'react';
import './board.scss';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import axios from 'axios';
import { BiSearch } from "react-icons/bi";

function Board() {
    return (
        <div id='board_wrap'>
            <h1>Product List</h1>
            {/* 새로운 타이틀의 상품이 추가되면 datalist 안에 option 추가하기 */}
            <div id='board_hd'>
                <input type="text" list='prd_options'/>
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
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>[basic] topper</TableCell>
                        <TableCell>22년 1월 26일 수요일 15:50</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>[active] motion bed</TableCell>
                        <TableCell>22년 1월 26일 수요일 15:55</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div id='board_ft'>
                <button>글쓰기</button>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default Board;