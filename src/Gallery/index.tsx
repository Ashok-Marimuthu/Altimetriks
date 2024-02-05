import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import commonStyles from "../Styles";
import Header from "../Components/Header";
import colors from "../Colors";
import { ICON_TYPE, IconX } from "../Icons";

interface GalleryProps {
    navigation: any
}

const Gallery: React.FC<GalleryProps> = ({ navigation }) => {
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
                    <Text style={{ alignSelf: 'center', color: colors.white, fontSize: 14 }}>Gallery</Text>
                </Pressable>
            </View>
            <Text>Gallery Screen</Text>
        </SafeAreaView>
    )
};

export default Gallery;