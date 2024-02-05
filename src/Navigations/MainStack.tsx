import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './Routes';
import Home from '../Home';
import ViewDetails from '../ViewDetails';
import Contact from '../Contact';
import Service from '../Services';
import Gallery from '../Gallery';
import BottomNavigation from './bottomStack';

const Stack = createNativeStackNavigator();

const MainStack: React.FC = (props) => {
    return (
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen
                name={Routes.BOTTOM_STACK}
                options={{ headerShown: false }}
                component={BottomNavigation}
            />
            <Stack.Screen
                name={Routes.HOME_SCREEN}
                options={{ headerShown: false }}
                component={Home}
            />
            <Stack.Screen
                name={Routes.VIEW_DETAILS}
                options={{ headerShown: false }}
                component={ViewDetails}
            />
            <Stack.Screen
                name={Routes.CONTACT}
                options={{ headerShown: false }}
                component={Contact}
            />
            <Stack.Screen
                name={Routes.SERVICES}
                options={{ headerShown: false }}
                component={Service}
            />
            <Stack.Screen
                name={Routes.GALLERY}
                options={{ headerShown: false }}
                component={Gallery}
            />
        </Stack.Navigator>
    );
};

export default MainStack;