import React from 'react';
import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import { props as iprops } from '@bauman-conference-library/interface';

export const TopicsTable = (props: iprops.TopicsTable) => {
    
    
    return(
        <Table>
            <TableBody>
                {
                    props.topics.map((topic: string, index: number) => 
                        <TableRow key={index}>
                            <TableCell> { index } </TableCell>
                            <TableCell> { topic } </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    )
}