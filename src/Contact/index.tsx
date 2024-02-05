import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import commonStyles from "../Styles";
import Header from "../Components/Header";
import colors from "../Colors";
import { ICON_TYPE, IconX } from "../Icons";

interface ContactProps {
    navigation: any
}

const Contact: React.FC<ContactProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={{ height: 70, backgroundColor: colors.appBgColor, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
                <Pressable
                    style={{ alignSelf: 'center', flexDirection: 'row' }}
                    onPress={() => navigation.goBack()}>
                    <IconX
                        style={commonStyles.menuIcon}
                        origin={ICON_TYPE.MATERIAL_ICONS}
                        name={'arrow-back'}
                    />
                    <Text style={{ alignSelf: 'center', color: colors.white, fontSize: 14 }}>Contact</Text>
                </Pressable>
            </View>
            <Text>Contact Screen</Text>
        </SafeAreaView>
    )
};

export default Contact;