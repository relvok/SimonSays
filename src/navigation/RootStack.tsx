import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import GameScreen from '../screens/GameScreen';
import ResultsScreen from '../screens/ResultsScreen';

export type RootStackTypes = {
  GameScreen: undefined;
  ResultsScreen: undefined;
};

const RootStack = createStackNavigator<RootStackTypes>();

const SimonNavigator: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="GameScreen">
      <RootStack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="ResultsScreen"
        component={ResultsScreen}
        options={{
          headerShown: false,
          headerLeft: () => null,
        }}
      />
    </RootStack.Navigator>
  );
};

export default SimonNavigator;
