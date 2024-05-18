

export const container_theme = {
    MuiContainer: {
        styleOverrides: {
            root: {
                display: 'flex', 
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'row',
                paddingLeft: '0 !important',
                paddingRight: '0 !important'
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