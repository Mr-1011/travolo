import React from 'react'
import Navbar from './Navbar'
import '../Styling/Profile.css'
import { TextField } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <Navbar title={'just link'} desc={'just copy and paste links from either social media profiles or Google Drive links to let an algorithm scan them an analyze you interests'} />
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
      <div className='next__div' style={{ marginTop: "4vh" }}>
        <Link to='/dictionary' className='next__link'>
          <Button variant="contained" size="large" sx={{ width: 160 }}>Next</Button>
        </Link>
      </div>
    </div>
  )
}
