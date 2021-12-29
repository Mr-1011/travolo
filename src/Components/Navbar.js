import React, { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import '../Styling/Navbar.css'
import { Button } from '@mui/material';

export default function Navbar({ title, desc }) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [checked, setChecked] = useState(true);

    const handleSubmit = () => {
        setChecked(!checked);
    }

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
                        'aria-labelledby': 'basic-button'
                    }}
                >
                    <MenuItem>
                        <Link to='/' className='link'>Swipe</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/category' className='link'>Category</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/sliders' className='link'>Slider</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/profile' className='link'>Profiler</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/dictionary' className='link'>Dictionary</Link>
                    </MenuItem>
                </Menu>
                <h1 className='flexItem'>{title}</h1>
                <IconButton className='flexItem'>
                    <HelpIcon fontSize='large' className='nav__icon'
                        onClick={handleSubmit}
                    />
                </IconButton>
            </div>
            {checked ?
                <div className='help__div'>
                    <div className='help__text__div'>
                        <h1 className='help__h1'>Quick guide</h1>
                        <p className='help__p'>{desc}</p>
                        <div style={{ marginTop: "4vh" }}>
                            <Button variant="contained" onClick={handleSubmit} size="large" sx={{ width: 160, backgroundColor: '#ffffff', color: '#000000' }}>got it</Button>
                        </div>
                    </div>
                </div>
                :
                null
            }

        </nav>
    )
}
