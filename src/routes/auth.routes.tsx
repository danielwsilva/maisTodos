import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignInUser } from '../screens/SignInUser';
import { SignInPassword } from '../screens/SignInPassword';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name="SignInUser"
        component={SignInUser}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen 
        name="SignInPassword"
        component={SignInPassword}
        options={{
          gestureEnabled: false,
        }}
      />
    </Navigator>
  );
}