import React from 'react';
import { Box, Typography, Paper, Grid, Chip } from '@mui/material';

const experiences = [
  {
    title: "Dot Net Developer",
    company: "Manappuram Finance Ltd",
    period: "May 2025 – Present",
    type: "Internal Transfer",
    achievements: [
      "Developed internal enterprise web apps using ASP.NET MVC, ADO.NET, and PL/SQL",
      "Designed Employee Management and Salary modules",
      "Automated payroll logic via stored procedures and triggers",
      "Collaborated with QA and HR teams for integration"
    ],
  },
  {
    title: "Software Tester",
    company: "Manappuram Finance Ltd",
    period: "Jan 2023 – Apr 2025",
    achievements: [
      "Performed regression and functional testing",
      "Reduced release defects through optimized QA workflows",
      "Contributed in Agile sprint cycles and release readiness"
    ],
  },
  {
    title: "Branch Operations Executive",
    company: "Manappuram Finance Ltd",
    period: "Dec 2020 – Jan 2023",
    type: "Non-IT",
    achievements: [
      "Oversaw branch and gold loan operations",
      "Improved customer satisfaction by 30%",
      "Gained domain knowledge aiding in IT transition"
    ],
  },
];

const Experience = () => {
  return (
    <Box sx={{ padding: 4 }} id="experience">
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Professional Experience
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h6" gutterBottom>
                {exp.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {exp.company}
              </Typography>
              {exp.type && (
                <Chip label={exp.type} size="small" sx={{ marginBottom: 1 }} />
              )}
              <Typography variant="body2" gutterBottom>
                {exp.period}
              </Typography>
              <ul>
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>
                    • {ach}
                  </li>
                ))}
              </ul>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;