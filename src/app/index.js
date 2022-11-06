import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from '@constants/theme';
import { Provider } from 'react-redux';
import { store, persistor } from '@store';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from '@routes/index';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Routes />
          </SafeAreaProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
