export const table_theme = {
    MuiTableRow: {
        styleOverrides: {
            '&:nth-of-type(odd)': ({ theme }: any) =>
            ({
                backgroundColor: theme.palette.primary.main,
                border: 0
            }),
            '&:last-child td, &:last-child th':
            {
                border: 0
            }
        }
    }
}