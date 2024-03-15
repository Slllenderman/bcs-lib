import { Box } from "@mui/material"
import { ReactNode } from "react"

interface LayoutProps{
    children:ReactNode
}

export const Layout = (props:LayoutProps) => <Box maxWidth='1280px' width='100%' mx='auto' p='16px' boxSizing='border-box'>{props.children}</Box>