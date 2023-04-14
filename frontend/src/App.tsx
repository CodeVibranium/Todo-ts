import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
// FC stands for React Functional Component which is an interface which includes all the params
// that can be passed to this component.

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <h1>Hello world</h1>
    </ThemeProvider>
  );
};

export default App;
