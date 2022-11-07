/* eslint-disable react/style-prop-object */
import React from 'react';
// import { SafeAreaView } from '@components/Basic/SafeAreaView';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Stacks from './Stack';

function Routes() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </>
  );
}

export default Routes;
