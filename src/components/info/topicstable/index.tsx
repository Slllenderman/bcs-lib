import React from 'react'
import { ThemeProvider, Typography, Table, TableBody, TableRow, TableCell, Box } from '@mui/material'
import { props as iprops, useWidget } from '@bauman-conference-library/interface'
import { useTheme } from '../../../themes'

export const TopicsTable = (props: iprops.TopicsTable) => {
    props = useWidget(props)
    const theme = useTheme(props)

    return (
        <ThemeProvider theme={theme}>
            <Table>
                <TableBody>
                    {
                        props.topics.map((topic, index) => 
                            <TableRow sx={{backgroundColor: 
                                index % 2 == 0 ? 'primary.light' : 'white'
                            }}>
                                <TableCell width='60px'>
                                    <Box marginLeft='30px'>
                                        <Typography variant='h2'> 
                                            { index + 1 }
                                        </Typography>
                                    </Box> 
                                </TableCell>
                                <TableCell>
                                    <Typography variant='h2'> 
                                        { topic } 
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </ThemeProvider>
    )
}