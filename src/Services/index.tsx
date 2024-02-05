import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import commonStyles from "../Styles";
import Header from "../Components/Header";

interface ServiceProps {
    navigation: any
}

const Service: React.FC<ServiceProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <Header navigation={navigation} />
            <Text>Services Screen</Text>
        </SafeAreaView>
    )
};

export default Service;