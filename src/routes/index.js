import { SafeAreaView } from '@components/Basic/SafeAreaView';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Tabs from './Tabs';
function Routes() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Routes