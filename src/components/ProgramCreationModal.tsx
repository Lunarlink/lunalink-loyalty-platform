import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Component } from 'react';
import PointsProgramService from '../services/PointsProgramService';
import IPointsProgramData from '../types/PointsProgram';
import IPointsSettingsData from '../types/PointsSettings';

const style = {
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

class ProgramCreationModal extends Component {

    state = {
        open: false,
        loader: false,
        name: '',
        description: '',
        organizer: '',
        email: '',
        tokenName: '',
        tokenSymbol: '',
        tokenIcon: '',
        rewardRate: ''
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({
            open: false,
            name: '',
            description: '',
            organizer: '',
            email: '',
            tokenName: '',
            tokenSymbol: '',
            tokenIcon: '',
            rewardRate: ''
        });
    };

    create = () => {

        const settings: IPointsSettingsData = {
            rewardRate: this.state.rewardRate
        }

        const model: IPointsProgramData = {
            name: this.state.name,
            description: this.state.description,
            organizer: this.state.organizer,
            email: this.state.email,
            tokenName: this.state.tokenName,
            tokenSymbol: this.state.tokenSymbol,
            image: this.state.tokenIcon,
            type: 'points',
            settings: settings
        };

        this.handleClose();
        this.setState({ loader: true });

        PointsProgramService.create(model)
            .then((response: any) => {
                this.setState({ loader: false });
                window.location.reload();
            })
            .catch((e: Error) => {
                console.log(e);

            });
    };

    render() {

        return (
            <div>
                <Button variant="contained" onClick={this.handleOpen}>Create Coalition</Button>
                <Modal
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    BackdropProps={{ style: { backgroundColor: "black", opacity: 0.8 } }}>
                    <Box sx={style}>
                        <h2>Create Program</h2>
                        
                        <TextField label="Name" variant="outlined" placeholder="Name" sx={{ mb: 5 }}
                            onChange={(e) => {
                                this.setState(prev => ({ ...prev, name: e.target.value }))
                            }}
                            InputLabelProps={{ style: { color: '#FFF9FB' } }}
                        required />
                        
                        <TextField label="Description" variant="outlined" placeholder="Description" sx={{ mb: 5 }}
                            onChange={(e) => {
                                this.setState(prev => ({ ...prev, description: e.target.value }))
                            }}
                            InputLabelProps={{ style: { color: '#FFF9FB' } }}
                        required />

                        <TextField label="Organizer" variant="outlined" placeholder="Organizer" sx={{ mb: 5 }}
                            onChange={(e) => {
                                this.setState(prev => ({ ...prev, organizer: e.target.value }))
                            }}
                            InputLabelProps={{ style: { color: '#FFF9FB' } }}
                        required />

                        <TextField label="Email" variant="outlined" placeholder="Email" sx={{ mb: 5 }}
                            onChange={(e) => {
                                this.setState(prev => ({ ...prev, email: e.target.value }))
                            }}
                            type="email"
                            InputLabelProps={{ style: { color: '#FFF9FB' } }}
                        required />

                        <TextField label="Token Name" variant="outlined" placeholder="Token Name" sx={{ mb: 5 }}
                            onChange={(e) => {
                                this.setState(prev => ({ ...prev, tokenName: e.target.value }))
                            }}
                            InputLabelProps={{ style: { color: '#FFF9FB' } }}
                        required />

                        <TextField label="Token Symbol" variant="outlined" placeholder="Token Symbol" sx={{ mb: 5 }}
                            onChange={(e) => {
                                this.setState(prev => ({ ...prev, tokenSymbol: e.target.value }))
                            }}
                            InputLabelProps={{ style: { color: '#FFF9FB' } }}
                        required />

                        <TextField label="Token Icon" variant="outlined" placeholder="Token Icon" sx={{ mb: 5 }}
                            onChange={(e) => {
                                this.setState(prev => ({ ...prev, tokenIcon: e.target.value }))
                            }}
                            InputLabelProps={{ style: { color: '#FFF9FB' } }}
                        required />

                        <TextField label="Reward Rate" variant="outlined" placeholder="Reward Rate" sx={{ mb: 5 }}
                            onChange={(e) => {
                                this.setState(prev => ({ ...prev, rewardRate: e.target.value }))
                            }}
                            InputLabelProps={{ style: { color: '#FFF9FB' } }}
                            inputProps={{ maxLength: 1, step: "0.1" }}
                            id="outlined-number"
                            type="number"
                        required />

                        <Button variant="contained" sx={{ float: "right" }} onClick={this.create}>Create</Button>
                    </Box>
                </Modal>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={this.state.loader}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        );
    }
}


export default ProgramCreationModal;