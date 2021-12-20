import React from 'react'
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import '../Styling/Navbar.css'

export default function Navbar({ title }) {
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <nav>
            <div className='nav__center'>
                <IconButton
                    className='flexItem'
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon fontSize='large' className='nav__icon' />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button'}}
                >
                    <MenuItem>
                        <Link to='/' className='link'>Swipe</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/category' className='link'>Category</Link>
                    </MenuItem>
                </Menu>
                <h1 className='flexItem'>{title}</h1>
                <IconButton className='flexItem'>
                    <HelpIcon fontSize='large' className='nav__icon' />
                </IconButton>
            </div>
        </nav>
    )
}
