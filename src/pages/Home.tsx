import { Component } from 'react';
import { Box, Container } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import IPointsProgramData from '../types/PointsProgram';
import PointsProgramService from '../services/PointsProgramService';
import ProgramCreationModal from '../components/ProgramCreationModal';
import { Link } from 'react-router-dom';
;

const Item = styled('div')(({ theme }) => ({

  border: '1px solid',
  padding: theme.spacing(1),
  paddingLeft: '20px',
  paddingRight: '20px',
  borderRadius: '4px',
  textAlign: 'left'
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



          <Grid container spacing={2} sx={{ mt: '2vh', height: '30vh!important', border: '' }}>

            {this.state.programs.map((program: any) => {
              return <Grid xs={12} md={4} sm={6}  >
                <Item key={program.id} sx={{ color: 'secondary.main', border: '1px solid #32174d', height: '20vh!important' }}>
                  <h2>{program.name}</h2>
                  <p style={{ color: '#FFF9FB' }} >{program.description}</p>
                  <Link style={{ color: 'white' }} to={`/program-view/${program.id}`}>Details</Link>
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