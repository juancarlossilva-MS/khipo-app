import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import styles from '../../styles/Home.module.css'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" className={styles.header}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography className={styles.typo} sx={{ flexGrow: 1 }}>
            Products
          </Typography>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}