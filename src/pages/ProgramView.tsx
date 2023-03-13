import Grid from '@mui/material/Grid';
import { Component } from 'react';
import PointsProgramService from '../services/PointsProgramService';
import withRouter from '../services/withRouter';
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import IPartnerData from '../types/Partner';
import PartnerService from '../services/PartnerService';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

const style = {
    border: '1px solid  #32174d',
    borderRadius: '4px',
    textAlign: 'left',
    bgcolor: 'transparent',
    color: '#3CDBD3',
    paddingLeft: '30px'
};

const Item = styled('div')(({ theme }) => ({
    border: '1px solid',
    padding: theme.spacing(1),
    borderRadius: '4px',
    color: 'priamry.main'
}));

const secondaryText = {
    color: 'secondary.main',
};

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    bgcolor: '#11111F',
    boxShadow: 24,
    color: 'white',
    p: 5
};

class ProgramView extends Component<{}, any>  {


    constructor(props: any) {
        super(props);
        this.state = {
            openModal: false,
            loader: false,
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
            partnerModel: {
                name: "",
                description: "",
                email: "",
                walletAddress: "",
            }

        };

        this.retrieveProgram(props.params.id);


    }

    handleOpen = () => {
        this.setState({
            openModal: true,
        });
    };

    handleClose = () => {
        this.setState({
            openModal: false,
            partnerModel: {}
        });
    };

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

    addPartner = () => {

        let pM = this.state.partnerModel;
        const model: IPartnerData = {
            name: pM.name,
            description: pM.description,
            email: pM.email,
            walletAddress: pM.walletAddress,
            associatedProgram: this.state.program.id
        };

        this.handleClose();
        this.setState({ loader: true });

        PartnerService.add(model)
            .then((response: any) => {
                this.setState({ loader: true });
                window.location.reload();
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
                <Box sx={{ height: '100vh', mt: '5vh', mb: '5vh' }} >

                    <Grid container spacing={5} sx={{ mt: '2vh', border: '' }}>
                        <Grid item xs={12} md={6} lg={6}>
                            <Item sx={style}>
                                <h2 >Program Details</h2>
                                <List
                                sx={{
                                    width: '100%',
                                }}
                            >
                                    <ListItem>
                                        <ListItemText primary="Name" secondary={program.name} secondaryTypographyProps={secondaryText}/>
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                    <ListItem>
                                        <ListItemText primary="Type" secondary={program.type} secondaryTypographyProps={secondaryText} />
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                    <ListItem>
                                        <ListItemText primary="Organizer" secondary={program.organizer} secondaryTypographyProps={secondaryText} />
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                    <ListItem>
                                        <ListItemText primary="Email" secondary={program.email} secondaryTypographyProps={secondaryText} />
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                    <ListItem>
                                        <ListItemText primary="Created" secondary={program.created} secondaryTypographyProps={secondaryText} />
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                    <ListItem>
                                        <ListItemText primary="Description" secondary={program.description} secondaryTypographyProps={secondaryText} />
                                    </ListItem>
                                </List>
                            </Item>

                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Item sx={style}>
                                <h2 >Token Details</h2>
                                <List
                                sx={{
                                    width: '100%',
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
                                    <ListItemText primary="Symbol" secondary={program.tokenSymbol}  secondaryTypographyProps={secondaryText}/>
                                </ListItem>

                                <Divider variant="middle" component="li" />
                                <ListItem>
                                    <ListItemText primary="Name" secondary={program.tokenName}  secondaryTypographyProps={secondaryText}/>
                                </ListItem>
                                <Divider variant="middle" component="li" />
                                <ListItem>
                                    <ListItemText primary="Reward Rate" secondary={program.settings?.rewardRate}  secondaryTypographyProps={secondaryText}/>
                                </ListItem>
                                <Divider variant="middle" component="li" />
                                <ListItem>
                                    <ListItemText primary="Contract Address"  secondaryTypographyProps={secondaryText} secondary={<Link to={`https://explorer.solana.com/address/${program.tokenAddress}?cluster=devnet`} target="_blank">{program.tokenAddress}&nbsp;<OpenInNewIcon /></Link>} />
                                </ListItem>

                            </List>
                            </Item>
                            
                        </Grid>
                    </Grid>
                    
                    <Modal
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        open={this.state.openModal}
                        onClose={this.handleClose}
                        BackdropProps={{ style: { backgroundColor: "black", opacity: 0.8 } }}>
                        <Box sx={modalStyle}>
                            <h2>Add Partner</h2>

                            <TextField label="Name" variant="outlined" placeholder="Name" sx={{ mb: 5 }}
                                onChange={(e) => {
                                    let pM = this.state.partnerModel;
                                    pM.name = e.target.value
                                    this.setState(prev => ({ ...prev, partnerModel: pM }))
                                }}
                                InputLabelProps={{ style: { color: '#FFF9FB' } }}
                                required />

                            <TextField label="Description" variant="outlined" placeholder="Description" sx={{ mb: 5 }}
                                onChange={(e) => {
                                    let pM = this.state.partnerModel;
                                    pM.description = e.target.value
                                    this.setState(prev => ({ ...prev, partnerModel: pM }))
                                }}
                                InputLabelProps={{ style: { color: '#FFF9FB' } }}
                                required />

                            <TextField label="Email" variant="outlined" placeholder="Email" sx={{ mb: 5 }}
                                onChange={(e) => {
                                    let pM = this.state.partnerModel;
                                    pM.email = e.target.value
                                    this.setState(prev => ({ ...prev, partnerModel: pM }))
                                }}
                                type="email"
                                InputLabelProps={{ style: { color: '#FFF9FB' } }}
                                required />

                            <TextField label="Wallet Address" variant="outlined" placeholder="Wallet Address" sx={{ mb: 5 }}
                                onChange={(e) => {
                                    let pM = this.state.partnerModel;
                                    pM.walletAddress = e.target.value
                                    this.setState(prev => ({ ...prev, partnerModel: pM }))
                                }}
                                InputLabelProps={{ style: { color: '#FFF9FB' } }}
                            />
                            <Button variant="contained" sx={{ float: "right" }} onClick={this.addPartner}>Add</Button>
                        </Box>
                    </Modal>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={this.state.loader}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    
                    <Button variant="contained" onClick={this.handleOpen} sx={{float: 'right', mt: '6vh', mb: '2vh'}}>Add Partner</Button>
                    <TableContainer sx={{ mt: '5vh', color: '#32174d' }}>
                        
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ border: '1px solid #32174d' }}>
                                <TableRow>
                                    <TableCell align="right" sx={{ color: '#3CDBD3', fontWeight: 'bold', borderBottom:'#32174d'}}>Name</TableCell>
                                    <TableCell align="right" sx={{ color: '#3CDBD3', fontWeight: 'bold', borderBottom:'#32174d' }}>Description</TableCell>
                                    <TableCell align="right" sx={{ color: '#3CDBD3', fontWeight: 'bold', borderBottom:'#32174d' }}>Email</TableCell>
                                    <TableCell align="right" sx={{ color: '#3CDBD3', fontWeight: 'bold', borderBottom:'#32174d' }}>Wallet Address</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ border: '1px solid #32174d' }}>
                                {partners.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right" sx={{color: 'white', borderBottom:'1px solid #32174d'}}>{row.name}</TableCell>
                                        <TableCell align="right" sx={{color: 'white', borderBottom:'1px solid #32174d'}}>{row.description}</TableCell>
                                        <TableCell align="right" sx={{color: 'white', borderBottom:'1px solid #32174d'}}>{row.email}</TableCell>
                                        <TableCell align="right" sx={{color: 'white', borderBottom:'1px solid #32174d'}}>{row.walletAddress}</TableCell>
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