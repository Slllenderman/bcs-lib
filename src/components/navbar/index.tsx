import { props as iprops } from "@bauman-conference-library/interface";
import { Box, Link, Button, ThemeProvider, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { IIASU_icon } from "./iiasu_icon";
import { theme } from "../../themes";
import { Link as RouterLink } from "react-router-dom"

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
        color: 'black',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    }

    return(
        <ThemeProvider theme={theme}>
            <Box>
                <Box sx={sub_header}>
                    <Link component={RouterLink} to="/" variant="h3" sx={iiasu_navinline}>
                        <IIASU_icon></IIASU_icon>
                        ИИАСУ'24
                    </Link>
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
                            props.children, (link) => <Link> { link } </Link>
                        )
                    }
                </Box>
            </Box>
        </ThemeProvider>
    )
}

    
    