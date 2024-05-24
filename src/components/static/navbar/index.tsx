import React, { PropsWithChildren } from 'react';
import { props as iprops, useWidget } from '@bauman-conference-library/interface';
import { Box, Button, ThemeProvider, Typography, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'
import { IIASU_icon } from './iiasu_icon';
import { useTheme } from "../../../themes"

// Сломанная тема !!!!

export const Navbar = (props : PropsWithChildren<iprops.NavbarProps>): JSX.Element => {

    props = useWidget(props)
    const theme = useTheme(props)

    const sub_header = {
        display: 'flex',
        gap: '16px',
        mb: '16px',
        justifyContent: 'space-between'
    }

    const header = {
        display: 'flex',
        gap: '16px',
        py: '16px',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        borderBottom: '1px solid black',
        borderTop: '1px solid black',
    }

    const iiasu_navinline = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    }

    return(
        !props.visibility ? <></> :
        <ThemeProvider theme={theme}>
            <Container sx={{maxWidth: '2000px !important'}}>
                <Box width='100%'>
                    <Box sx={sub_header}>
                        <MuiLink underline='none' component={RouterLink} to='/' variant='h2' fontK={props.font_size} sx={iiasu_navinline}>
                            <IIASU_icon></IIASU_icon>
                            ИИАСУ'24
                        </MuiLink>
                        <Box sx={iiasu_navinline}> 
                            <Button variant='outlined' onClick={props.signin_callback} sx={{textTransform:'none'}} color='info'>
                                <Typography variant='h2' fontK={props.font_size}>
                                    Войти
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box component='nav' sx={header}>
                        { 
                            React.Children.map(
                                props.children, (link) => (link)
                            )
                        }
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

    
    