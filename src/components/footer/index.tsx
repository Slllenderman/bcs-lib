import React  from "react";
import { Box } from "@mui/material";
import { props as iprops } from "@bauman-conference-library/interface";
import { Info } from "./info";
import { Connection } from "./connection"

// Проблемы: подключение шрифтов

export const Footer = (): JSX.Element => {

    const footer = {
        display: "flex",
        flexDirection: "column",
        padding: "48px 56px 32px 56px",

    }
    const line = {
        bgcolor: "#CFCFCF",
        border: "1px",
        height: "1px"
    }

    return (
        <Box sx={ footer }>
            <Info/>
            <Connection/>
        </Box>
    );
}