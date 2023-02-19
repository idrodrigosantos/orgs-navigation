import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/telas/Home';
// import MelhoresProdutores from './src/telas/MelhoresProdutores';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />

      <NavigationContainer>
        <Home />
        {/* <MelhoresProdutores /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
