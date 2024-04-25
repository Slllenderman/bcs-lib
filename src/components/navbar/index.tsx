import { props as iprops } from "@bauman-conference-library/interface";
import { Box, Link, Button, ThemeProvider } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { IIASU_icon } from "./iiasu_icon";
import { theme } from "../../themes";

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

    return(
        <ThemeProvider theme={theme}>
            <Box>
                <Box sx={sub_header}>
                    <IIASU_icon></IIASU_icon>
                    <Box>
                        <Button color='inherit'>RUS</Button>
                        <Button variant="outlined" sx={{textTransform:'none'}} color='info'>Войти</Button>
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

    
    