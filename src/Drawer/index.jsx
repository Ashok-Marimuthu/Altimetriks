/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, View, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native';
import Service from '../Services';
import Gallery from '../Gallery';
import Contact from '../Contact';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Routes from '../Navigations/Routes';
import Header from '../Components/Header';
import colors from '../Colors';
import commonStyles from '../Styles';

const Drawer = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <FooterMenu />
            </DrawerContentScrollView>
        </View>
    );
};

const FooterMenu = () => {
    const navigation = useNavigation();
    const drawerLink = route => {
        navigation.dispatch(DrawerActions.closeDrawer());
        navigation.navigate(route);
    };
    return (
        <View>
            <View style={{ height: 70, backgroundColor: colors.appBgColor, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            </View>
            <View
                style={{
                    borderColor: '#D1D1D1',
                    borderWidth: 0.5,
                }}
            />
            {/* <Pressable
                style={commonStyles.cont}
                onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
                <Text style={commonStyles.bold}>Home</Text>
            </Pressable>
            <Pressable
                style={commonStyles.cont}
                onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
                <Text style={commonStyles.bold}>View Cars</Text>
            </Pressable>
            <Pressable
                style={commonStyles.cont}
                onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
                <Text style={commonStyles.bold}>Services</Text>
            </Pressable> */}
            <Pressable style={commonStyles.cont} onPress={() => drawerLink(Routes.GALLERY)}>
                <Text style={commonStyles.bold}>Gallery</Text>
            </Pressable>
            <Pressable style={commonStyles.cont} onPress={() => drawerLink(Routes.CONTACT)}>
                <Text style={commonStyles.bold}>Contact Us</Text>
            </Pressable>
        </View>
    );
};


export default Drawer;
