import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../screens/Dashboard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { Navigator, Screen } = createBottomTabNavigator();

interface Props {
  children: ReactNode;
  onPress(): void;
}

export function AppRoutes() {
  const theme = useTheme();

  const CustomTabBarButton = ({ children, onPress }: Props) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        top:-35,
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <View style={{
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: theme.colors.background_secondary,
        borderWidth: 10,
        borderColor: theme.colors.main,
        marginTop: 10
      }}>
        {children}
      </View>
    </TouchableOpacity>
  );

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.colors.text_detail,
        tabBarInactiveTintColor: theme.colors.background_primary,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 88,
          paddingBottom: 20,
          backgroundColor: theme.colors.main,
        }
      }}
    >
      <Screen 
        name="Inicio"
        component={Dashboard}
        options={{
          tabBarIcon: (({ color }) => (
            <MaterialIcons 
              name="home"
              size={35}
              color={color}
            />
          )),
          tabBarLabelStyle: { fontSize: 13 }
        }}
      />

      <Screen 
        name="Transações"
        component={Dashboard}
        options={{
          tabBarIcon: (({ color }) => (
            <MaterialIcons 
              name="credit-card"
              size={35}
              color={color}
            />
          )),
          tabBarLabelStyle: { fontSize: 13 }
        }}
      />

      <Screen 
        name="Pagar"
        component={Dashboard}
        options={{
          tabBarIcon: (({ focused, color }) => (
            <MaterialIcons 
              name="attach-money"
              size={45}
              color={focused ? color : theme.colors.main }
            />
          )),
          tabBarLabel: (({focused, color}) => (
            <Text style={{ 
                color: focused ? color : theme.colors.main,
                alignSelf: 'center',
                fontSize: 15,
                marginBottom: 5
            }}>
              Pagar
            </Text>
          )),
          tabBarButton: (props: any) => (
            <CustomTabBarButton  {...props} />
          )
        }}  
      />

      <Screen 
        name="Cartões"
        component={Dashboard}
        options={{
          tabBarIcon: (({ color }) => (
            <MaterialIcons 
              name="account-balance-wallet"
              size={35}
              color={color}
            />
          )),
          tabBarLabelStyle: { fontSize: 13 }
        }}
      />

      <Screen 
        name="Perfil"
        component={Dashboard}
        options={{
          tabBarIcon: (({ color }) => (
            <MaterialIcons 
              name="account-circle"
              size={35}
              color={color}
            />
          )),
          tabBarLabelStyle: { fontSize: 13 }
        }}
      />
    </Navigator>
  );
}