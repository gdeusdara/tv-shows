import { SafeAreaView } from '@components/Basic/SafeAreaView';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Tabs from './Tabs';
function Routes() {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Routes