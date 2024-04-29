import { props as iprops } from "@bauman-conference-library/interface";
import { Box, Button, ThemeProvider, Typography, Container } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { IIASU_icon } from "./iiasu_icon";
import { theme } from "../../themes";
import { Link as RouterLink } from 'react-router-dom'
import { Link as MuiLink} from '@mui/material'

export const Navbar = (props : PropsWithChildren<iprops.NavbarProps>): JSX.Element => {
    
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
        borderTop: '1px solid black'
    }

    const iiasu_navinline = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    }

    return(
        <ThemeProvider theme={theme}>
            <Container>
                <Box width='100%'>
                    <Box sx={sub_header}>
                        <MuiLink component={RouterLink} to="/" variant="h3" sx={iiasu_navinline}>
                            <IIASU_icon></IIASU_icon>
                            ИИАСУ'24
                        </MuiLink>
                        <Box sx={iiasu_navinline}>
                            <Button color='inherit'>
                                <Typography fontSize={18}>
                                    RUS
                                </Typography>
                            </Button>
                            <Button variant="outlined" sx={{textTransform:'none'}} color='info'>
                                <Typography fontSize={18}>
                                    Войти
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box component='nav' sx={header}>
                        { 
                            React.Children.map(
                                props.children, (link) => { return link }
                            )
                        }
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

    
    