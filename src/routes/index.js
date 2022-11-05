import { SafeAreaView } from '@components/Basic/SafeAreaView';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Stacks from './Stack';

function Routes() {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Routes