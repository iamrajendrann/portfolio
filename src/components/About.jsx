import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f0f4f8' }} id="about">
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        About Me
      </Typography>
      <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 2, backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="body1" gutterBottom>
          I'm a passionate Full Stack .NET Developer who made a successful transition from QA and operations to development in 2025. This journey has provided me with a comprehensive understanding of the software development lifecycle.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Currently working at Manappuram Finance Ltd, I develop enterprise web applications using ASP.NET MVC, C#, and PL/SQL. My experience spans Employee Management, Salary modules, and automated payroll systems.
        </Typography>
        <Typography variant="body1">
          My background in QA testing and branch operations provides valuable domain knowledge, enabling me to build solutions that truly meet business needs.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;