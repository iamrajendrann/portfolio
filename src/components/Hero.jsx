import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e0f7fa, #fff3e0)',
        padding: 4,
      }}
      id="home"
    >
      <Box sx={{ maxWidth: 800, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Rajendran N
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          Full Stack .NET Developer
        </Typography>
        <Typography variant="body1" sx={{ marginY: 2, lineHeight: 1.6 }}>
          Passionate developer with a journey from QA to Full Stack Development. Bringing domain expertise and technical proficiency to create scalable enterprise solutions.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 4 }}>
          <Button
            variant="contained"
            color="primary"
            href="https://linkedin.com/in/rajendrannsmart"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </Button>
          <Button variant="outlined" color="primary" href="#contact">
            Get In Touch
          </Button>
        </Box>
        <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}>
          {/* Scroll down indicator */}
          <Typography variant="body2" color="textSecondary" sx={{ animation: 'bounce 2s infinite' }}>
            ↓
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;