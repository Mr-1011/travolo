import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import qr from '../Data/help/qr-code.svg';
import Instructions from '../Data/help/Instructions.svg'
import { Link } from "react-router-dom";
import '../Styling/Navbar.css'
import { useTranslation } from 'react-i18next';

export default function Navbar({ title, desc, pic }) {
    const { t } = useTranslation();

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
        <div>
            <div className='div__nav'>
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
                            <Link to='/' className='link'>{t('Swipe')}</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category' className='link'>{t('Category')}</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/sliders' className='link'>{t('Slider')}</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/dictionary' className='link'>{t('Dicionary')}</Link>
                        </MenuItem>
                    </Menu>
                    <h1 className='flexItem'>{title}</h1>
                    <IconButton className='flexItem' onClick={handleSubmit}>
                        <HelpIcon fontSize='large' className='nav__icon' />
                    </IconButton>
                </div>
            </div>
            {checked ?
                <div className='help__center'>
                    <div className='help__block' />
                    <div className='help__div'>
                        <div className='help__text__div'>
                            <h1 className='help__h1'>{t('Guide')}</h1>
                            <p className='help__p'>{desc}</p>
                            <img className='help__img' src={pic} alt='tutorial'></img>
                            <button className='help__button' onClick={handleSubmit}>
                                {t('Gotit')}
                            </button>
                        </div>
                    </div>
                </div>
                :
                null
            }
            <div className='desktop__view'>
                <img className='desktop__svg' src={Instructions} alt='Instructions' />
                <img className='desktop__img' src={qr} alt='QR Code' />
                <h1>only on mobile</h1>
            </div>
        </div>
    )
}
