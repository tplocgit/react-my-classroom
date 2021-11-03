import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './index.scss'

export default function ClassroomCard({header, title, subTitle, content, actionTitle, actionCallback}) {
  return (
    <Box className='classroom-card' sx={{ width: 275, display: 'inline-block' }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {header}
            </Typography>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {subTitle}
            </Typography>
            <Typography variant="body2">
              {content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ml: 'auto'}} size="small" onClick={actionCallback}>{actionTitle}</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}