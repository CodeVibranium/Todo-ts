import React, { FC, ReactElement } from 'react';
import Profile from './Profile';
import CreateTask from './CreateTask';

const TaskGenerator: FC = (): ReactElement => {
  return (
    <>
      <Profile name={'Shahed'} message={'This your task manager dashboard'} />
      <CreateTask />
    </>
  );
};

export default TaskGenerator;
