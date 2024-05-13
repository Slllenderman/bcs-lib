import React from "react"
import { Container, Typography, Box, ThemeProvider, Button, Link } from "@mui/material"
import { props as iprops} from "@bauman-conference-library/interface"
import { theme } from "../../../themes"
import { Link as RouterLink } from "react-router-dom"

export const ConferenceLocation = (props: iprops.ConferenceLoactionProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Container variant="accent">
                <Box display="flex" flexDirection="row" alignItems="center" justifyItems="end">
                    <Box display="flex" justifySelf="start" flexDirection="column" marginRight="100px">
                        <Typography variant="title" fontSize_koef={props.font_size}>
                            Место проведения
                        </Typography>
                        <Typography variant="h2" fontSize_koef={props.font_size}>
                            { props.address }
                        </Typography>
                        <Button variant="outlined">
                            <Link component={RouterLink} to={props.ya_link} whiteSpace="nowrap">
                                Открыть схему проезда
                            </Link>
                        </Button>
                    </Box>
                    <Box width="400px" height="100%">
                    <svg viewBox="0 0 592 424" fill="none">
                        <g clip-path="url(#clip0_247_3113)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M224.828 -37L491.783 65.4571L495.954 77.4802L455.285 178.369L427.13 166.869L433.387 151.187C425.74 147.353 406.274 144.286 389.589 162.687L369.776 205.552L379.161 210.256L357.784 257.826L348.92 253.644L340.057 276.644C338.84 286.054 339.744 306.231 353.092 311.668L355.699 304.35L383.854 317.418L346.835 403.67L331.714 412.557L95 319.509L107.514 287.099L166.431 309.577L198.237 228.029L194.587 225.938L207.622 193.006L225.349 200.324L248.291 138.118L228.999 130.8L269.668 22.0697L210.75 -2.49913L224.828 -37ZM327.022 373.351L184.159 318.986L193.023 296.508L212.314 302.259L214.4 296.508L226.913 301.213L235.256 280.303L203.451 267.758L205.536 262.53L238.906 275.076L246.727 253.644L213.357 242.666L220.135 223.325L321.286 258.348C321.286 258.348 314.508 281.349 320.244 301.736C325.979 322.123 344.749 332.578 344.749 332.578L327.022 373.351ZM438.601 129.754L462.064 79.0484L369.255 45.0703L365.605 53.4341L295.738 26.7743L293.652 32.0017L310.858 38.2746L278.532 122.436L364.041 154.323C364.041 154.323 370.819 134.982 396.889 127.663C422.959 120.345 438.601 129.754 438.601 129.754ZM348.92 175.233L278.532 151.187L273.318 163.732C273.318 163.732 293.345 170.809 286.874 186.733C281.139 200.847 261.847 193.006 261.847 193.006L256.112 210.256L322.329 234.825L348.92 175.233Z" stroke="#95D0D9" stroke-width="3"/>
                        <rect x="591.949" y="-51.7803" width="41" height="549" transform="rotate(23.5473 591.949 -51.7803)" fill="#95D0D9"/>
                        <path d="M623.66 454.508L613.285 441.593L534.896 384.879L521.063 375.895H506.653L499.736 378.702L495.125 384.879L477.833 408.463L464 438.224L593.111 459L623.66 454.508ZM623.66 454.508L619.049 429.239L518.181 358.488L513.569 351.749L510.111 339.396L513.569 325.358L566.597 215.861L571.785 210.246L581.007 208L630 210.246L623.66 454.508Z" stroke="#95D0D9" stroke-width="3"/>
                        <path d="M0 423.5L75 232M187.5 -65.5L150.775 32.5M150.775 32.5L187.5 98.5L138 222L75 232M150.775 32.5L75 232" stroke="#95D0D9" stroke-width="3"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_247_3113">
                        <rect width="592" height="424" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}