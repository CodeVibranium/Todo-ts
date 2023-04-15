import React, { useState, FC, ReactElement, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  Chip,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material';
interface ITodo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
const TasksList: FC = (): ReactElement => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => setTodos(json.slice(0, 10)));
  }, []);
  return (
    <Box
      sx={{
        maxHeight: '60vh',
        overflow: 'auto',
        maxWidth: '60%',
      }}
    >
      {todos.map((todo) => {
        return (
          <Card
            variant="outlined"
            key={todo.id}
            sx={{
              backgroundColor: 'background.paper',
              marginY: '15px',
              padding: '20px',
              borderRadius: '15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '12px',
                marginBottom: '12px',
              }}
            >
              <Typography variant="h5">{todo.title}</Typography>
              <Chip label={`${new Date().toDateString()}`} variant="outlined" />
            </div>
            <div
              style={{
                marginTop: '12px',
                marginBottom: '12px',
                fontSize: 'small',
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus dolorum sit aperiam praesentium esse nisi?
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '12px',
                marginBottom: '12px',
              }}
            >
              <FormControlLabel control={<Switch />} label="In progress" />
              <Button
                variant="contained"
                size="small"
                sx={{ backgroundColor: 'green' }}
              >
                Mark Complete
              </Button>
            </div>
          </Card>
        );
      })}
    </Box>
  );
};

export default TasksList;
