import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1a202c', padding: 3, textAlign: 'center', color: 'white' }}>
      <Typography variant="body2" sx={{ marginBottom: 1 }}>
        © 2025 Rajendran N. Built with React & Material-UI
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
          component="a"
          href="https://linkedin.com/in/rajendrannsmart"
          target="_blank"
          rel="noopener"
          sx={{ color: 'white' }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:nrajendran497@gmail.com"
          sx={{ color: 'white' }}
        >
          <Email />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;