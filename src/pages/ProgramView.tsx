import Grid from '@mui/material/Grid';
import { Component } from 'react';
import PointsProgramService from '../services/PointsProgramService';
import withRouter from '../services/withRouter';
import IPointsProgramData from '../types/PointsProgram';
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const style = {
    border: '1px solid',
    borderRadius: '4px',
    textAlign: 'left',
    bgcolor: '#F1F1F1',
    color: 'secondary.dark',
    borderColor: 'primary.main'
};

const Item = styled('div')(({ theme }) => ({
    border: '1px solid',
    padding: theme.spacing(1),
    borderRadius: '4px',
}));

class ProgramView extends Component<{}, { program: IPointsProgramData }> {


    constructor(props: any) {
        super(props);
        this.state = {
            program: {
                type: "",
                name: "",
                description: "",
                organizer: "",
                email: "",
                tokenName: "",
                tokenSymbol: "",
                image: ""
            },
        };

        this.retrieveProgram(props.params.id);


    }

    retrieveProgram = (id) => {
        PointsProgramService.get(id)
            .then((response: any) => {
                this.setState({ program: response.data })
                console.log(response.data)
            })
            .catch((e: Error) => {
                console.log(e);

            });
    };

    openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    render() {

        const program = this.state.program;
        let partners = program.partners ? program.partners : []
        return (
            <Container>
                <Box sx={{ height: '100vh', mt: '5vh' }} >

                    <Grid container spacing={2} sx={{ mt: '2vh', border: '' }}>
                        <Grid item xs={12} md={6} lg={7}>
                            <Item sx={style}>
                                <h2 style={{ color: '#3CDBD3' }}>Program Details</h2>
                                <List sx={{
                                    width: '100%',
                                    bgcolor: 'background.paper',
                                }}>
                                    <ListItem>
                                        <ListItemText primary="Name" secondary={program.name} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Type" secondary={program.type} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Organizer" secondary={program.organizer} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="email" secondary={program.email} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Created" secondary={program.created} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Description" secondary={program.description} />
                                    </ListItem>
                                </List>
                            </Item>

                        </Grid>
                        <Grid item xs={12} md={6} lg={5}>
                            <Item sx={style}>
                                <h2 style={{ color: '#3CDBD3' }}>Token Details</h2>
                            </Item>
                            <List
                                sx={{
                                    width: '100%',
                                    bgcolor: 'background.paper',
                                }}
                            >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={`${program.image}`}
                                                alt={program.name}
                                                loading="lazy"
                                                width="64"
                                                height="64"
                                            />
                                        </Avatar></ListItemAvatar>
                                    <ListItemText primary="Symbol" secondary={program.tokenSymbol} />
                                </ListItem>

                                <Divider variant="middle" component="li" />
                                <ListItem>
                                    <ListItemText primary="Name" secondary={program.tokenName} />
                                </ListItem>                                
                                <ListItem>
                                        <ListItemText primary="Reward Rate" secondary={program.settings?.rewardRate} />
                                </ListItem>
                                <Divider variant="middle" component="li" />
                                <ListItem>
                                    <ListItemText primary="Contract Address" secondary={<Link to={`https://explorer.solana.com/address/${program.tokenAddress}?cluster=devnet`} target="_blank">{program.tokenAddress}&nbsp;<OpenInNewIcon /></Link>} />
                                </ListItem>

                            </List>
                        </Grid>
                    </Grid>
                    <TableContainer component={Paper} sx={{ mt: '5vh' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ border: '3px solid #3CDBD3' }}>
                                <TableRow>
                                    <TableCell align="right" sx={{ color: '#3CDBD3', fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell align="right" sx={{ color: '#3CDBD3', fontWeight: 'bold' }}>Description</TableCell>
                                    <TableCell align="right" sx={{ color: '#3CDBD3', fontWeight: 'bold' }}>Email</TableCell>
                                    <TableCell align="right" sx={{ color: '#3CDBD3', fontWeight: 'bold' }}>Wallet Address</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {partners.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.description}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">{row.walletAddress}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

            </Container>

        );
    }
}

export default withRouter(ProgramView);