import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@constants/theme';
import { Provider } from 'react-redux';
import { store, persistor } from '@store';
import { PersistGate } from 'redux-persist/integration/react'
import DefaultApp from '..';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <DefaultApp />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App