import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

function BoardList({data}) {
    return (
        <TableRow>
            <TableCell>{data.no}</TableCell>
            <TableCell>{data.title}</TableCell>
            <TableCell>{data.date}</TableCell>
        </TableRow>
    );
}

export default BoardList;