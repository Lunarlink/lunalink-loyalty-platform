import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: ' #3F0077'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Link to="/" style={{ textDecoration: 'none' }}><img
                            src="/logo192.png"
                            loading="lazy"
                            width="32"
                            height="32"
                        /></Link>
                        
                    </IconButton>

                    <nav>
                        <Link to="/" style={{ color: '#3CDBD3', fontSize: '25px', textDecoration: 'none' }}>Lunarlink</Link>
                    </nav>
                </Toolbar>
            </AppBar>
        </Box>
    );
}