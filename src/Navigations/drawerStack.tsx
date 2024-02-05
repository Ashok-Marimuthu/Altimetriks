/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './bottomStack';
import DrawerScreen from '../Drawer'; // Import your custom drawer content component
import Routes from './Routes';
import colors from '../Colors';
import MainStack from './MainStack';

const Drawer = createDrawerNavigator();

const DrawerStack: React.FC = (props) => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: 'front',
                drawerStyle: {
                    backgroundColor: colors.white,
                    width: '70%',
                },
                swipeEdgeWidth: 2,
                drawerPosition: 'left',
            }}
            drawerContent={(props) => <DrawerScreen {...props} />}>
            <Drawer.Screen
                options={{ headerShown: false }}
                name={Routes.MAIN_STACK}
                component={MainStack}
            />
        </Drawer.Navigator>
    );
};

export default DrawerStack;
