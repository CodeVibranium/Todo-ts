import React, { FC, ReactElement } from 'react';
import TasksList from './TasksList';
import TasksStats from './TasksStats';

const Tasks: FC = (): ReactElement => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TasksStats />
      <TasksList />
    </div>
  );
};

export default Tasks;
