import React, { FC, ReactElement } from 'react';

// FC stands for React Functional Component which is an interface which includes all the params
// that can be passed to this component.

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
