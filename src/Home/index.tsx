import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from "react-native";
import commonStyles from "../Styles";
import Header from "../Components/Header";
import list from '../data.json';
import CustomModal from "../Components/Modal";

interface HomeProps {
    navigation: any
}

const Home: React.FC<HomeProps> = ({ navigation }) => {

    const [isVisible, setVisible] = useState(false);
    const [carBrand, setCarData] = useState({});

    const toggleModal = () => {
        setVisible(!isVisible);
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <Header navigation={navigation} />
            <View style={{ margin: 10 }}>
                <FlatList
                    data={list.listData}
                    initialNumToRender={10}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <Pressable
                            onPress={() => {
                                setCarData(item)
                                toggleModal()
                            }}
                            style={{ padding: 20, marginBottom: index == list.listData.length - 1 ? 100 : 20, height: 100, borderRadius: 10, borderWidth: 1, borderColor: '#000' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={{
                                        uri: item.imgURL
                                    }}
                                    resizeMode="stretch"
                                    style={{ width: 100, height: 50, borderColor: '#000', borderWidth: 1 }}
                                />
                                <Text style={[commonStyles.text12, { marginHorizontal: 10 }]}>{item.name}</Text>
                            </View>
                        </Pressable>
                    )}
                >
                </FlatList>
            </View>
            <CustomModal isVisible={isVisible} onClose={toggleModal} navigation={navigation} carItem={carBrand} defaultVal={''} />
        </SafeAreaView>
    );
};

export default Home;
