import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts, 
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black 
} from '@expo-google-fonts/lato';

import theme from './src/styles/theme';

import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black 
  });

  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}