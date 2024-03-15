import { Box, Link } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'

interface HeaderLink{
    to:string,
    title:string
}

interface HeaderProps{
    links:HeaderLink[]
}

export const Header = (props:HeaderProps) => (
<Box display='flex' component='nav' gap='16px' justifyContent='space-between' boxSizing='border-box' py='16px' borderBottom='1px solid #444' borderTop='1px solid black' mx='auto'>
    {props.links.map(link=>
        <Link component={RouterLink} to={link.to} color='#444' sx={{textDecoration:'none'}} variant='h6' key={link.title}>{link.title}</Link>
    )}
</Box>
)