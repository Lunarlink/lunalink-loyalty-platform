import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      background: {
        default: "#11111F"
      },
      primary: {
        main: '#3CDBD3',
        error: '#EF476F',
        warning: '#FFD166'
      },
    },
  })

  export default theme;