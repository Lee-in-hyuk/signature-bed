import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

function BoardList({data, board}) {
    return (
        // <TableRow>
        //     <TableCell>{data.no}</TableCell>
        //     <TableCell>{data.title}</TableCell>
        //     <TableCell>{data.date}</TableCell>
        // </TableRow>
        <>
        {board.map(data=>(
            <TableRow>
                <TableCell>{data.no}</TableCell>
                <TableCell>{data.title}</TableCell>
                <TableCell>{data.date}</TableCell>
            </TableRow>
        ))}
        </>
    );
}

export default BoardList;