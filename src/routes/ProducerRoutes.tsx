import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Basket } from '@/screens/Basket';
import { Home } from '@/screens/Home';
import { Producer } from '@/screens/Producer';
import { Summary } from '@/screens/Summary';

const Stack = createNativeStackNavigator();

export function ProducerRoutes({ MainComponent = Home }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={MainComponent} />
      <Stack.Screen name="Producer" component={Producer} />
      <Stack.Screen name="Basket" component={Basket} />
      <Stack.Screen name="Summary" component={Summary} />
    </Stack.Navigator>
  );
}
