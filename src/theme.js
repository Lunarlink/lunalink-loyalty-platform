import { createTheme, createMuiTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      background: {
        default: "#11111F"
      },
      primary: {
        main: '#3CDBD3',
        error: '#EF476F',
        warning: '#FFD166',
        light: '#FFF9FB',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
    components: {
        // Name of the component
        MuiTextField: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFFFFF",
                "&:hover": {
                    border: '#FFFFFF'
                  },
              },

              "&.Mui-focused": {
                color: "#FFFFFF"
              }
              ,
              fontSize: '1rem',
              width: '100%',
              input: {
                color: '#FFFFFF',
                width: '90%'
              }
            },
          },
        }
      },
  })



  export default theme;