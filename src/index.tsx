import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './Navigations/Routes';
import BottomNavigation from './Navigations/bottomStack';
import { Provider } from 'react-redux';
import store from './Store';
import { PaperProvider } from 'react-native-paper';
import DrawerStack from './Navigations/drawerStack';
import { ThemeProvider } from './Context';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name={Routes.DRAWER_STACK} component={DrawerStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
