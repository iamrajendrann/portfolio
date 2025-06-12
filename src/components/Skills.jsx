import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const skillsData = [
  {
    title: "Languages & Frameworks",
    skills: ["C#", "ASP.NET MVC", "ADO.NET", "PL/SQL"],
    color: "#3b82f6" // blue-500
  },
  {
    title: "Databases",
    skills: ["Oracle", "MySQL"],
    color: "#10b981" // green-500
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    color: "#f59e0b" // orange-500
  },
  {
    title: "Tools & Practices",
    skills: ["Visual Studio", "Git", "Postman", "Agile", "Auth & Authorization"],
    color: "#8b5cf6" // purple-500
  },
];

const Skills = () => {
  return (
    <Box sx={{ padding: 4 }} id="skills">
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Technical Skills
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skillsData.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ backgroundColor: '#f0f4f8', borderRadius: 2, height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: category.color }}>
                  {/* You can add icons here if needed */}
                  {category.title}
                </Typography>
                {category.skills.map((skill, idx) => (
                  <Box key={idx} sx={{ marginY: 1, padding: 1, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
                    {skill}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;