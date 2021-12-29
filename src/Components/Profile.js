import React from 'react'
import Navbar from './Navbar'
import '../Styling/Profile.css'
import { TextField } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';

export default function Profile() {
  return (
    <div>
      <Navbar title={'just link'} />
      <div className='profile__div'>
        <InstagramIcon sx={{ color: '#265ac2', fontSize: 50, margin: 1 }} />
        <TextField
          sx={{ width: 250 }}
          label="Instragram Profile"
          placeholder="Profile"
        />
      </div>
      <div className='profile__div'>
        <PinterestIcon sx={{ color: '#265ac2', fontSize: 50, margin: 1 }} />
        <TextField
          sx={{ width: 250 }}
          label="Pinterest Profile"
          placeholder="Profile"
        />
      </div>
      <div className='profile__div'>
        <GoogleIcon sx={{ color: '#265ac2', fontSize: 50, margin: 1 }} />
        <TextField
          sx={{ width: 250 }}
          label="Google Drive Link"
          placeholder="Link"
        />
      </div>
    </div>
  )
}
