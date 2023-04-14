import React, { FC, ReactElement } from 'react';
import Profile from './Profile';

const TaskGenerator: FC = (): ReactElement => {
  return (
    <Profile name={'Shahed'} message={'This your task manager dashboard'} />
  );
};

export default TaskGenerator;
