import React from 'react';
import './board.scss';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import axios from 'axios';

function Board() {
    return (
        <div id='board_wrap'>
            <h1>BOARD</h1>
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
                        <TableCell>전체공지글</TableCell>
                        <TableCell>22년 1월 26일 수요일 15:50</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>전체공지글</TableCell>
                        <TableCell>22년 1월 26일 수요일 15:55</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default Board;