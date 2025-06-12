import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Toggle mobile menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle scroll to change AppBar style
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((text) => (
          <ListItem button component="a" href={`#${text.toLowerCase()}`} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" color={scrollY > 50 ? 'default' : 'transparent'} elevation={scrollY > 50 ? 4 : 0} sx={{
      transition: 'background-color 0.3s',
    }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo or Name */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          RN
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((text) => (
            <Button key={text} href={`#${text.toLowerCase()}`} sx={{ color: 'text.primary' }}>
              {text}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;