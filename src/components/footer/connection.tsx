import React  from "react";
import { Box } from "@mui/material";

export const Connection = () => {

    const connection = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "32px 0px"
    }
    return (
        <Box sx={ connection }>
            <Box>
                {/* Здесь через  map нужно будет передавать элементы */}
                Почта для связи: eoiw@gmail.com
            </Box>
            <Box>
                {/* здесь просто прокидыватестя год */}
                2012-2013
            </Box>
        </Box>
    );
}