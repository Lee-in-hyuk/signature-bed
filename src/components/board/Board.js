import React from 'react';
import './board.scss';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import axios from 'axios';
import { BiSearch } from "react-icons/bi";
import BoardList from './BoardList';

function Board({sampleData}) {
    
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
            <button>글쓰기</button>
        </div>
    );
}

export default Board;