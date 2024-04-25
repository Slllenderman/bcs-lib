import { Box, Typography } from "@mui/material";
import React  from "react";

export const Heading = (): JSX.Element => {

    const heading = {
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        // py: '16px',
        // justifyContent: 'space-between',
        // boxSizing: 'border-box',
        // borderBottom: '1px solid black',
        // borderTop: '1px solid black'
    }

    return (
        <Box sx={ heading }>
            {/* // здесь будет  фотка*/}
            <Box>
                <Typography variant="subtitle1" sx={{textTransform:"uppercase"}}>Всероссийская научная конференция</Typography>
                <Typography variant="h1"> <span style={{color: "#22BEC5"}}>Искусственный интеллект</span> в автоматизированных 
                        системах управления и обработки данных
                </Typography>
            </Box>
        </Box>
    );
}