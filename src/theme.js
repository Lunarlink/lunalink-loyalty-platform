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
      main: '#FFF9FB',
      dark: '#11111F'
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#32174d",
            "&:hover": {
              border: '#32174d'
            },
          },

          "&.Mui-focused": {
            color: "#3CDBD3"
          }
          ,
          fontSize: '1rem',
          width: '100%',
          input: {
            color: '#3CDBD3',
            width: '90%'
          }
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {

          a: {
            color: '#32174d',

            "&:visited":{
              color: '#32174d',
            }
          }
      },
    },
  },
},
  })



export default theme;