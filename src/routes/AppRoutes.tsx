import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProducerRoutes from './ProducerRoutes';
import BestProducersRoutes from './BestProducersRoutes';

import Heart from '../assets/icons/heart.svg';
import Home from '../assets/icons/home.svg';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            let Icon = Home;

            if (route.name === 'Melhores Produtores') {
              Icon = Heart;
            }

            return <Icon color={color} width={20} height={20} />;
          },
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarLabelStyle: {
            fontSize: 15,
          },
        })}
      >
        <Tab.Screen name="Home" component={ProducerRoutes} />
        <Tab.Screen
          name="Melhores Produtores"
          component={BestProducersRoutes}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
