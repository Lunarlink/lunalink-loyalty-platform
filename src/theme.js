import { createTheme } from '@mui/material/styles';

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
      dark: '#11111F'
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {

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
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&.MuiTypography-colorPrimary": {
            color: "green"
          },
          "&.MuiTypography-colorSecondary": {
            color: "green"
          },
          a: {
            color: '#FFFFFF',
          }
      },
    },
  },
},
  })



export default theme;