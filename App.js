import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Basket from './src/screens/Basket';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import basket from './src/mocks/basket';

export default function App() {
  const [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fontLoaded) {
    return <View />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Basket {...basket}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
