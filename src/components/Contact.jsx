import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ padding: 4, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }} id="contact">
      <Typography variant="h4" gutterBottom sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
        Let's Connect
      </Typography>
      <Typography variant="body1" sx={{ color: 'white', textAlign: 'center', marginBottom: 4 }}>
        Ready to collaborate on your next project or discuss opportunities
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          startIcon={<></>} // You could add icons here
          href="https://linkedin.com/in/rajendrannsmart"
          target="_blank"
          rel="noopener"
        >
          Connect on LinkedIn
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<></>} // You could add icons here
          href="mailto:nrajendran497@gmail.com"
        >
          Send Email
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;