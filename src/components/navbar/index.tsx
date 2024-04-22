import { props as iprops } from "@bauman-conference-library/interface";
import { Box, Link } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { SubHeader } from "./sub-header";

export const Navbar = (props : PropsWithChildren<iprops.NavbarProps>): JSX.Element => {
    
    return(
        <>
            <SubHeader></SubHeader>
            <Box display='flex' component='nav' gap='16px' justifyContent='space-between' boxSizing='border-box' py='16px' borderBottom='1px solid #444' borderTop='1px solid black' mx='auto'>
                { React.Children.map(props.children, (link) => 
                    <Link>
                        { link }
                    </Link>
                )}
            </Box>
        </>
    )
}

    
    