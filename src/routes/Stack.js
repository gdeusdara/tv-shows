import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import { Details } from '@pages/index';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

function Stacks() {
  const theme = useTheme();

  const tabsOptions = {
    headerShown: false,
  };

  const screenOptions = {
    headerStyle: { backgroundColor: theme.colors.background },
    headerTintColor: theme.colors.text,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Tabs" component={Tabs} options={tabsOptions} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default Stacks;
