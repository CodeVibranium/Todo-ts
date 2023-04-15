import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';

type TaskType = {
  title: string;
  description: string;
  task_status: 'pending' | 'in_progress' | 'completed' | '';
  task_priority: 'urgent' | 'soon' | 'thinking' | '';
};
const CreateTask: FC = (): ReactElement => {
  const { register, handleSubmit, reset, resetField } = useForm<TaskType>();

  function onSubmit(data: TaskType): void {
    console.log(data);
    reset({
      description: '',
      task_priority: '',
      task_status: '',
      title: '',
    });
    resetField('task_status');
    resetField('task_priority');
  }
  return (
    <Box paddingX={1}>
      <Typography
        variant="h6"
        component="h6"
        sx={{ marginY: '10px', fontSize: '15px' }}
      >
        Create a task
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                required
                fullWidth
                id="title"
                label="Title"
                variant="outlined"
                {...register('title')}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                required
                id="description"
                label="Description"
                variant="outlined"
                size="small"
                multiline
                rows={4}
                {...register('description')}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth required>
              <InputLabel id="task-status-label">Status</InputLabel>
              <Select
                {...register('task_status')}
                fullWidth
                labelId="task-status-label"
                id="task_status"
                // value={age}
                label="Status"
                // onChange={handleChange}
              >
                <MenuItem value={'pending'}>Pending</MenuItem>
                <MenuItem value={'in_progress'}>In Porgress</MenuItem>
                <MenuItem value={'completed'}>Completed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth required>
              <InputLabel id="task-priority-label">Priority</InputLabel>
              <Select
                fullWidth
                {...register('task_priority')}
                labelId="task-priority-label"
                id="task_priority"
                label="Priority"
              >
                <MenuItem value={'urgent'}>Urgent</MenuItem>
                <MenuItem value={'soon'}>Soon</MenuItem>
                <MenuItem value={'thinking'}>Thinking</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Button variant="contained" type="submit">
                Create Task
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CreateTask;
