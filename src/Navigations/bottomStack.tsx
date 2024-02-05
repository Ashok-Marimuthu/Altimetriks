import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Routes from "./Routes";
import Home from "../Home";
import Service from "../Services";
import Contact from "../Contact";
import Gallery from "../Gallery";
import { IconX, ICON_TYPE } from "../Icons"; // Make sure to import IconX and ICON_TYPE
import colors from "../Colors";
import commonStyles from "../Styles";
import ViewDetails from "../ViewDetails";

const Tabs = createBottomTabNavigator();

const BottomNavigation: React.FC = () => {
    return (
        <Tabs.Navigator
            initialRouteName={Routes.HOME_SCREEN}
            detachInactiveScreens={true}
            backBehavior={"initialRoute"}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.appColor,
                tabBarInactiveTintColor: colors.lightGrey,
                tabBarActiveBackgroundColor: colors.white,
                tabBarInactiveBackgroundColor: colors.white,
                tabBarStyle: commonStyles.tabBarStyle,
                tabBarShowLabel: true,
                tabBarLabelStyle: commonStyles.text12,
            }}
        >
            <Tabs.Screen
                name={Routes.HOME_SCREEN}
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconX
                            style={commonStyles.text22}
                            origin={ICON_TYPE.ANT_ICON}
                            name={"home"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name={Routes.VIEW_DETAILS}
                component={ViewDetails}
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconX
                            style={commonStyles.text22}
                            origin={ICON_TYPE.MATERIAL_COMMUNITY}
                            name={"car"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name={Routes.SERVICES}
                component={Service}
                options={{
                    tabBarIcon: ({ color }) => (
                        <IconX
                            style={commonStyles.text22}
                            origin={ICON_TYPE.MATERIAL_ICONS}
                            name={"miscellaneous-services"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
};

export default BottomNavigation;
