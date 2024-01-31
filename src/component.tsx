import React from 'react';
import { Typography, Box } from '@mui/material';
import { IConferenceDateWidget } from "@bauman-conference-library/interface/dist/confrence-date-widget";
import { ThemeProvider } from '@mui/system';
import {theme} from './theme';

export const ConferenceDateWidget = (props: IConferenceDateWidget) =>{
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{
      px: {none: 3, desktop: 7},
      py: {none: 4, desktop: 7},
      display: 'flex',
      flexDirection: {none: 'column', desktop: 'row'},
      gap: {none: 2, desktop: 3},
      textAlign: 'left',
      justifyContent: 'space-between',
      alignItems: 'center',
      bgcolor: "primary.light"}}>
      <Typography sx={{fontWeight: {none: 400, desktop: 400}}} variant="h2" color="initial">
      {
        props.format == 0 && (
          "Конференция проводится в оффлайн формате"
        )
      }
      {
        props.format == 1 && (
          "Конференция проводится в онлайн формате"
        )
      }
      {
        props.format == 2 && (
          "Конференция проводится в онлайн и оффлайн формате"
        )
      }
      </Typography>
      <Typography variant='date' sx={{color: "text.primary"}}>
          {props.date.toLocaleDateString()}
      </Typography>
    </Box>
    </ThemeProvider>
  )
}