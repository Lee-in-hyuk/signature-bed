import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import './createboard.scss';

function CreateBoard() {
    return (
        <div id='create_wrap'>
            <div id='create_hd'>
                <h2>상품 정보 등록하기</h2>
                <p><strong>*</strong> 필수 입력</p>
            </div>
            <form>
                <Table className='createTable'>
                    <TableBody>
                        <TableRow>
                            <TableCell>제목 <strong>*</strong></TableCell>
                            {/* <TableCell><input name='title' required type="text"/></TableCell> */}
                            <TableCell>
                                <select name='title' required>
                                    <option value='basic'>Basic</option>
                                    <option value='g2'>G2</option>
                                    <option value='active'>Active</option>
                                    <option value='motion'>Motion</option>
                                    <option value='topper'>Topper</option>
                                    <option value='mattress(all-in-one)'>Mattress(all-in-one)</option>
                                    <option value='mattress(foldable)'>Mattress(foldable)</option>
                                </select>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>설명 <strong>*</strong></TableCell>
                            <TableCell><textarea name='description' placeholder='최대 200자까지 작성 가능' maxLength='200' required cols='40' rows='10'/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>등록일 <strong>*</strong></TableCell>
                            <TableCell><input name='enrolldate' required type="date"/></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div id='input_div'>
                    <input type='submit' value="등록하기" />
                    <input type='reset' value='초기화' />
                </div>
            </form>
        </div>
    );
}

export default CreateBoard;