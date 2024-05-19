
export const button_theme = {
  MuiButton: {
    styleOverrides: {
		root: {
			textTransform: 'initial' 
		}
    },
    variants: [
		{
			props: {variant: 'upload'},
			style: {
				boxSizing: 'border-box',
				display: 'flex',
				flexDirection:'row',
				justifyContent: 'space-between',
				border: '1px solid #9F9F9F',
				p: 2,
				width: '100%',
				minHeight: '60px'
			}
		},
		{
			props: {variant: 'outlined'},
			style: {
				boxSizing: 'border-box',
				borderRadius: 0,
				bgcolor: 'initial',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				border: '3px solid #00A8B0',
				padding: '8px 20px',
				color: '#00A8B0',
				fontFamily: 'Inter',
				fontSize: '24px',
				lineHeight: '29px',
				fontWeight: 500,
				
				":hover": {
					bgcolor: '#00A8B01A',
					border: '3px solid #00A8B0',
				},
				":disabled": {
					border: '3px solid #CFCFCF',
					color: '#CFCFCF',
				},
			},
		},
		{
			props: {variant: 'contained'},
			style: ({ theme }: any) => ({ 
				bgcolor: theme.palette.primary.dark,
				borderRadius: 0,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '16px 28px',
				color: '#FFFFFF',

				":hover": {
					bgcolor: '#22BEC5',
					color: '#FFFFFF',
					padding: '16px 28px',
				},
			})
		},
		{
			props: {variant: 'mobile_nav'},
			style: {
				boxSizing: 'border-box',
				borderRadius: 0,
				bgcolor: 'initial',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				border: '3px solid #fff',
				padding: '8px 14px',
				color: '#fff',
				width: '100%',

				":disabled": {
					border: '3px solid gray',
					color: 'gray',
				},
			},
		},
		{
			props: {variant: 'text'},
				style: {
				textAlign: 'left',
				":disabled": {
					color: '#CFCFCF',
				}
			}
		}
    ],
  },
}