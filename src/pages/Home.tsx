import React, { useState, useEffect, Component } from 'react';
import { Box, Container } from '@mui/system';
import Button from '@mui/material/Button';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import IPointsProgramData from '../types/PointsProgram';
import PointsProgramService from '../services/PointsProgramService';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
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
            <Button variant="contained" onClick={() => {
              alert('clicked');
            }}>Create Coalition</Button>
          </div>



          <Grid container spacing={2} sx={{ mt: '2vh' }}>

            {this.state.programs.map((program: any) => {
              return <Grid xs={4}>
                  <Item key={program.id}><h2>{program.name}</h2><p>{program.description}</p></Item>
                
                </Grid>
            })}

          </Grid>
        </Box>
      </Container>
    )
  }

}

export default Home;