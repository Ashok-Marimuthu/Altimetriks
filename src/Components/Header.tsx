import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import commonStyles from "../Styles";
import aboutData from '../data.json'
import colors from "../Colors";
import { ICON_TYPE, IconX } from "../Icons";

interface HeaderProps {
    navigation: any
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {

    const _toggleDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <View style={{ height: 70, backgroundColor: colors.appBgColor, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            <Pressable
                style={{ alignSelf: 'flex-start', flexDirection: 'row' }}
                onPress={() => _toggleDrawer()}>
                <IconX
                    style={commonStyles.menuIcon}
                    origin={ICON_TYPE.MATERIAL_COMMUNITY}
                    name={'menu'}
                />
                <Image
                    source={{
                        uri: aboutData.about.orgURL,
                    }}
                    style={{ width: 150, height: 70 }}
                    resizeMode="contain"
                />
            </Pressable>
        </View>
    )
}

export default Header;