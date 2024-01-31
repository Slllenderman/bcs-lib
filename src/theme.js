import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({
  values: {
    none: 0,
    mobile: 360,
    tablet: 720,
    desktop: 1280,
  }
})
export const theme = createTheme(
  {
    breakpoints: breakpoints,
    
    palette: {
      primary: {
        main: '#22BEC5',
        light: '#E7F3F5'
      },
      text: {
        primary: '#22BEC5',
        secondary: '#000000',
        disabled: '#00000080'
      },
      white: '#fff'
    },
    typography: {
      date: {
        whiteSpace: 'nowrap', 
        fontFamily: '"Brygada 1918", sans-serif', 
        fontStyle: 'italic', 
        fontWeight: 600, 
        fontSize: 64, 
        lineHeight: '72px',
        [breakpoints.down('desktop')]: {
          fontSize: 28,
          lineHeight: '33px'
        }
      },
      h0: {
        fontFamily: `"Brygada 1918", serif`,
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 44,
        lineHeight: '52px',
        [breakpoints.down('desktop')]: {
          fontSize: 28,
          lineHeight: '33px'
        }
      },
      h1: {
        fontFamily: `"Brygada 1918", serif`,
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 32,
        lineHeight: '37px',
        [breakpoints.down('desktop')]: {
          fontSize: 24,
          lineHeight: '28px'
        }
      },
      h2: {
        fontFamily: `"Inter", sans-serif`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: '29px',
        [breakpoints.down('desktop')]: {
          fontWeight: 500,
          fontSize: 20,
          lineHeight: '24px'
        }
      },
      h2_bold: {
        fontFamily: `"Inter", sans-serif`,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: '29px',
        [breakpoints.down('desktop')]: {
          fontSize: 18,
          lineHeight: '24px'
        }
      },
      h3: {
        fontFamily: `"Inter", sans-serif`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: '24px',
        [breakpoints.down('desktop')]: {
          fontSize: 16,
          lineHeight: '19px'
        }
      },
      h3_bold: {
        fontFamily: `"Inter", sans-serif`,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 20,
        lineHeight: '24px',
        [breakpoints.down('desktop')]: {
          fontSize: 16,
          lineHeight: '19px'
        }
      },
      h3_select: {
        fontFamily: `"Inter", sans-serif`,
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: '24px'
      },
      h4: {
        fontFamily: `"Inter", sans-serif`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '19px',
        [breakpoints.down('desktop')]: {
          fontSize: 14,
          lineHeight: '19px'
        }
      },
      h4_bold: {
        fontFamily: `"Inter", sans-serif`,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '19px'
      },
      h5: {
        fontFamily: `"Inter", sans-serif`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '17px'
      },
      h6: {
        fontFamily: `"Inter", sans-serif`,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '15px'
      }
    },
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            ":before": {
              backgroundColor: 'transparent'
            }
          }
        }
      },
      MuiDataGrid: {
        styleOverrides: {
          root: {
            color: 'initial',
            fontFamily: `"Inter", sans-serif`,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '19px',
          },
          columnHeaderTitle: {
            color: '#22BEC5',
          },
        }
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: 'initial',
            fontFamily: `"Inter", sans-serif`,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 20,
            lineHeight: '24px',
            [breakpoints.down('desktop')]: {
              fontSize: 16,
              lineHeight: '19px'
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily: `"Inter", sans-serif`,
            fontWeight: 400,
            fontSize: 20,
            lineHeight: '24px',
            textTransform: 'initial',
            [breakpoints.down('desktop')]: {
              fontSize: 16,
              lineHeight: '19px'
            }
          }
        }
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid #CFCFCF',
            
          }
        }
      },
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
              padding: '16px 28px',
              color: '#00A8B0',
    
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
            style: {
              bgcolor: '#22BEC5',
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px 28px',
              color: '#FFFFFF',
    
              ":hover": {
                bgcolor: '#0FA2A8',
                color: '#FFFFFF',
                padding: '16px 28px',
              },
    
              ":disabled": {
                bgcolor: '#CFCFCF',
                color: '#FFFFFF',
                padding: '16px 28px',
              },
            },
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
  }
);
