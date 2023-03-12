import { Component } from 'react';
import { Box, Container } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import IPointsProgramData from '../types/PointsProgram';
import PointsProgramService from '../services/PointsProgramService';
import ProgramCreationModal from '../components/ProgramCreationModal';

const Item = styled('div')(({ theme }) => ({
  bgcolor: 'transparent',
  border: '1px solid',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));


class Home extends Component<{}, { programs: IPointsProgramData[] }> {

  constructor(props: any) {
    super(props);
    this.state = {
      programs: [],
    };
    this.retrievePrograms();
  }



  retrievePrograms = () => {
    PointsProgramService.getAll()
      .then((response: any) => {
        this.setState({ programs: response.data })
      })
      .catch((e: Error) => {
        console.log(e);

      });
  };

  render() {

    return (

      <Container >
        <Box sx={{ height: '100vh', mt: '5vh' }} >
          <div>
            <ProgramCreationModal></ProgramCreationModal>
          </div>



          <Grid container spacing={2} sx={{ mt: '2vh', border: '' }}>

            {this.state.programs.map((program: any) => {
              return <Grid xs={12} md={4} sm={6}  >
                <Item key={program.id} sx={{ color: 'secondary.main', borderColor: 'primary.main' }}>
                  <h2>{program.name}</h2>
                  <p style={{ color: '#FFF9FB' }} >{program.description}</p>
                </Item>
              </Grid>
            })}

          </Grid>
        </Box>
      </Container>
    )
  }

}

export default Home;