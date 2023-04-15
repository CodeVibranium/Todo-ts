import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TasksStats: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: '60%',
        minHeight: '40vh',
      }}
    >
      <div>
        <Avatar
          sx={{
            width: '96px',
            height: '96px',
            backgroundColor: 'transparent',
            marginBottom: '16px',
            border: '2px solid grey',
          }}
        >
          <Typography variant="h6" color="text.primary">
            1
          </Typography>
        </Avatar>
        <Typography variant="h6" color="text.primary">
          Todo's
        </Typography>
      </div>
      <div>
        <Avatar
          sx={{
            width: '96px',
            height: '96px',
            backgroundColor: 'transparent',
            marginBottom: '16px',
            border: '2px solid yellow',
          }}
        >
          <Typography variant="h6" color="text.primary">
            2
          </Typography>
        </Avatar>
        <Typography variant="h6" color="text.primary">
          In progress
        </Typography>
      </div>
      <div>
        <Avatar
          sx={{
            width: '96px',
            height: '96px',
            backgroundColor: 'transparent',
            marginBottom: '16px',
            border: '2px solid green',
          }}
        >
          <Typography variant="h6" color="text.primary">
            3
          </Typography>
        </Avatar>{' '}
        <Typography variant="h6" color="text.primary">
          Completed
        </Typography>
      </div>
    </Box>
  );
};

export default TasksStats;
