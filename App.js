import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Basket from './src/screens/Basket';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Basket />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
