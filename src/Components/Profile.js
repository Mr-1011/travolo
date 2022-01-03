import React, { useState } from 'react';
import Navbar from './Navbar'
import '../Styling/Profile.css'
import { TextField } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import Pic from '../Data/help/Profile-Tutorial.png'

export default function Profile() {

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
  }

  return (
    <div>
      <Navbar title={'just link'} desc={'just copy and paste links from either social media profiles or Google Drive links to let an algorithm scan them an analyze you interests'} pic={Pic} />
      {loading ?
        <div className='loading__div'>
          <h2 className='loading__h1'>Analyzing pictures</h2>
          <LinearProgress sx={{ borderRadius: 5, height: 5, backgroundColor: '#ffffff' }} />
        </div>
        :
        null
      }
      <div className='profile__div' style={{ marginTop: '5vh' }}>
        <InstagramIcon sx={{ color: '#265ac2', fontSize: 50, marginRight: 1 }} />
        <form style={{ width: '65vw' }} onSubmit={handleSubmit}>
          <TextField
            sx={{ width: '100%' }}
            label="Instragram Profile"
            placeholder="Profile"
          />
        </form>
      </div>

      <div className='divider__horizontal' />

      <div className='profile__div'>
        <PinterestIcon sx={{ color: '#265ac2', fontSize: 50, marginRight: 1 }} />
        <form style={{ width: '65vw' }} onSubmit={handleSubmit}>
          <TextField
            sx={{ width: '100%' }}
            label="Pinterest Profile"
            placeholder="Profile"
          />
        </form>
      </div>

      <div className='divider__horizontal' />

      <div className='profile__div'>
        <GoogleIcon sx={{ color: '#265ac2', fontSize: 50, marginRight: 1 }} />
        <form style={{ width: '65vw' }} onSubmit={handleSubmit}>
          <TextField
            sx={{ width: '100%' }}
            label="Google Drive Link"
            placeholder="Link"
          />
        </form>
      </div>

      <div className='next__div' style={{ marginTop: "4vh" }}>
        <Link to='/dictionary' className='next__link'>
          <button className='button__next'>
            NEXT
          </button>
        </Link>
      </div>
    </div>
  )
}
