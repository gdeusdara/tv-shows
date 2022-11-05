import { getList } from '@store/actions';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch()
  const list = useSelector(state => state.list)

  useEffect(() => {
    dispatch(getList({ page: 1 }))
  }, [])

  useEffect(() => {
    console.log('list', list)
  }, [list])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
