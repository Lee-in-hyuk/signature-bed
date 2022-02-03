import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAsync from '../../hooks/useAsync';
import './editboard.scss';

function Editboard() {
    const navigate = useNavigate();
    const param = useParams();
    const { id } = param;
    const [ formData, setFormData ] = useState({
        title:"",
        description:"",
        date:"",
    });
    async function getBoard(){
        const response = await axios.get(
            `http://localhost:8080/edit/${id}`
        )
        return response.data;
    }
    const datastate = useAsync(getBoard);
    const { loading, error, data:board } = datastate;
    if(loading) return <div>로딩중.......</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!board) return null;

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    // 폼 submit이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        editBoard();
        setFormData({
            title:"",
            description:"",
            date:"",
        })
    }
    // put전송 axios
    function editBoard(){
        axios.put(`http://localhost:8080/edit/${id}`,formData)
        .then(function(res){
            navigate(-1);
            console.log(res);
        }).catch(function(err){
            console.log(err);
        })
    }
    return (
        <div id='edit_wrap'>
            <h1>상품 정보 수정하기</h1>
            <form onSubmit={onSubmit}>
                <Table id="edit_tb">
                    <TableBody>
                    <TableRow>
                            <TableCell>제목 <strong>*</strong></TableCell>
                            <TableCell>
                                <select name='title' required value={formData.title} onChange={onChange}>
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
                            <TableCell><textarea name='description' value={formData.description} onChange={onChange} placeholder='최대 200자까지 작성 가능' maxLength='200' required cols='40' rows='10'/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>등록일 <strong>*</strong></TableCell>
                            <TableCell><input name='date' value={formData.date} onChange={onChange} required type="date"/></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div id='edit_btn'>
                    <button type='submit'>등록</button>
                    <button type='reset'>취소</button>
                </div>
            </form>
        </div>
    );
}

export default Editboard;