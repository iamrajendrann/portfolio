import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip } from '@mui/material';

const educationData = [
  {
    degree: "M.E. Computer Science Engineering",
    institution: "Sengunthar Engineering College",
    period: "2020 – 2022",
    type: "Master's"
  },
  {
    degree: "B.E. Computer Science Engineering",
    institution: "Sengunthar Engineering College",
    period: "2016 – 2019",
    type: "Bachelor's"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Sri Ragavendra Polytechnic",
    period: "2013 – 2016",
    type: "Diploma"
  },
  {
    degree: "SSLC",
    institution: "St. Theresa's Matriculation School",
    period: "2012 – 2013",
    type: "School"
  },
];

const certifications = [
  {
    title: "Full Stack Developer in .NET",
    year: "2024",
    color: "#3b82f6"
  },
  {
    title: "Oracle PL/SQL Programming",
    year: "2023",
    color: "#ef4444"
  }
];

const Education = () => {
  return (
    <Box sx={{ padding: 4 }} id="education">
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Education & Certifications
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Education */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Education
          </Typography>
          {educationData.map((edu, index) => (
            <Card key={index} sx={{ marginBottom: 2, borderRadius: 2, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6">{edu.degree}</Typography>
                <Typography variant="subtitle1" color="primary">
                  {edu.institution}
                </Typography>
                <Chip label={edu.type} size="small" sx={{ marginTop: 1 }} />
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {edu.period}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Certifications */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Certifications
          </Typography>
          {certifications.map((cert, index) => (
            <Card key={index} sx={{ marginBottom: 2, borderRadius: 2, boxShadow: 2 }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: cert.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Optional icon */}
                </Box>
                <Box>
                  <Typography variant="h6">{cert.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {cert.year}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;