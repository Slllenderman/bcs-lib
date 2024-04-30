export const container_theme = {
    MuiContainer: {
        styleOverrides: {
            root: {
                display: 'flex', 
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'row'
            }
        },
        variants: [
            {
                props: {
                    variant: 'accent'
                },
                style: ({ theme }: any) => (
                    {
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: '3px'
                    }
                )
            }
        ]
    }
}

declare module '@mui/material' {
    interface ContainerOwnProps {
        variant?: String;
    }
}