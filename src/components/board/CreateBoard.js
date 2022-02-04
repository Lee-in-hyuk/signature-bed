import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import './createboard.scss';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function CreateBoard() {
    // const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        title:"",
        description:"",
        date:"",
    });
    const onChange = (e) => {
        // e.target은 각 인풋에 들어오는 값, 그걸 name과 value로 구조분해할당해서 적용
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
        // console.log(name,value);
    }
    // 폼 submit이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        createBoard();
        setFormData({
            title:"",
            description:"",
            date:"",
        })
    }
    // post전송 axios
    function createBoard(){
        axios.post("http://localhost:8080/create",formData)
        .then(function(res){
            console.log(res);
            // navigate(-1);
        }).catch(function(err){
            console.log(err);
        })
    }

    return (
        <div id='create_wrap'>
            <div id='create_hd'>
                <h2>상품 정보 등록하기</h2>
                <p><strong>*</strong> 필수 입력</p>
            </div>
            <form onSubmit={onSubmit}>
                <Table className='createTable'>
                    <TableBody>
                        <TableRow>
                            <TableCell>제목 <strong>*</strong></TableCell>
                            {/* <TableCell><input name='title' required type="text"/></TableCell> */}
                            <TableCell>
                                <select name='title' required value={formData.title} onChange={onChange}>
                                    <option value='basic'>basic</option>
                                    <option value='g2'>g2</option>
                                    <option value='active'>active</option>
                                    <option value='motion'>motion</option>
                                    <option value='topper'>topper</option>
                                    <option value='mattress'>mattress</option>
                                    <option value='mattress(all-in-one)'>mattress(all-in-one)</option>
                                    <option value='mattress(foldable)'>mattress(foldable)</option>
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
                <div id='input_div'>
                    <input type='submit' value="등록하기" />
                    <input type='reset' value='초기화' />
                </div>
            </form>
        </div>
    );
}

export default CreateBoard;