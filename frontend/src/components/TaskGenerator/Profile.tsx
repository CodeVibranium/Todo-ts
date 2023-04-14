import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

interface iProfile {
  name: string;
  message: string;
}
export const Profile: FC<iProfile> = ({ name, message }): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'blue',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          J
        </Typography>
      </Avatar>
      <Typography>Welcome, {name}</Typography>
      <Typography>{message}</Typography>
    </Box>
  );
};

export default Profile;
