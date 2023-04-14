import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import TaskGenerator from '../components/TaskGenerator/TaskGenerator';
import Tasks from '../components/Tasks/Tasks';
const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={8}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Tasks />
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          height: '100vh',
          position: 'fixed',
          right: 0,
          top: 0,
          width: '100%',
          backgroundColor: 'background.paper',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TaskGenerator />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
