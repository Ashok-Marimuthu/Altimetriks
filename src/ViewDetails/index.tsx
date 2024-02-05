import React, { createRef, useRef, useState } from "react";
import { View, Text, SafeAreaView, FlatList, Pressable, Image, Dimensions, Modal } from "react-native";
import commonStyles from "../Styles";
import Header from "../Components/Header";
import list from '../data.json';
import CustomModal from "../Components/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../Store";
import colors from "../Colors";
import aboutData from '../data.json'
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { ICON_TYPE, IconX } from "../Icons";
import { ScrollView } from "react-native";
import { Checkbox, Chip, List, RadioButton } from "react-native-paper";

interface ViewDetailsProps {
    navigation: any
}

interface Car {
    Photo: string;
    brand: string;
    color: string;
    externalFitments: string;
    index: number;
    insuranceValidUpto: string;
    kms: string;
    locations: string;
    modal: string;
    numberOfOwners: string;
    transmission: string;
    yearOfManufacture: string;
}

interface CarBrand {
    id: string;
    name: string;
}

const ViewDetails: React.FC<ViewDetailsProps> = ({ navigation }) => {
    const carState = useSelector((state: RootState) => state.car);
    const [stateCars, setCarState] = useState(carState.cars);
    const [isVisible, setVisible] = useState(false);
    const [actionModalVisible, setActionModalVisible] = useState(false);
    const [defaultData, setDefaultData] = useState({});
    const actionSheetRef = useRef<ActionSheetRef>(null)
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedOwner, setSelectedOwner] = useState<string>('');
    const carBrands: CarBrand[] = aboutData.listData;
    const [selectedFuelType, setSelectedFuelType] = useState<string | null>(null);
    const [selectedTransmission, setSelectedTransmission] = useState<string | null>(null);
    const [selectedPrice, setselectedPrice] = React.useState<string | null>(null);
    const ownerTypes = [
        { label: '1', value: '1st Owner' },
        { label: '2', value: '2nd Owner' },
        { label: '3', value: '3rd Owner' },
    ];
    const fuelTypes = [
        { label: 'petrol', value: 'Petrol' },
        { label: 'diesel', value: 'Diesel' },
        { label: 'cng', value: 'CNG' },
    ];
    const transmissionType = [
        { label: 'automatic', value: 'Automatic' },
        { label: 'manual', value: 'Manual' },
    ];

    const handleCheckboxPress = (value: string) => {
        const updatedOwners = selectedBrands.includes(value)
            ? selectedBrands.filter((owner) => owner !== value)
            : [...selectedBrands, value];

        setSelectedBrands(updatedOwners);
    };

    const handleReset = () => {
        setSelectedBrands([]);
        setSelectedOwner('');
        setSelectedFuelType('');
        setSelectedTransmission('');
        setselectedPrice('')
        setCarState(carState.cars)
    };

    const handleOwnerChange = (owner: string) => {
        setSelectedOwner(owner);
    };

    const handleFuelTypeChange = (value: string) => {
        setSelectedFuelType(value);
    };

    const handleTransmissionChange = (value: string) => {
        setSelectedTransmission(value);
    };

    const handleChipPress = (value: string) => {
        setselectedPrice(value);
    };

    const toggleModal = () => {
        setVisible(!isVisible);
    }

    const closeActionModal = () => {
        let constructJson = {
            "transmission": selectedTransmission,
            "fuelType": selectedFuelType,
            "ownerTypes": selectedOwner,
            "price": selectedPrice,
            "brand": selectedBrands
        }

        let filteredCars = [];

        if (selectedBrands.length > 0) {
            filteredCars = stateCars.filter((car: Car) => selectedBrands.includes(car.brand));
        }

        if (filteredCars.length > 0) {
            setCarState(filteredCars);
        }
        setActionModalVisible(false)
        // actionSheetRef.current?.setModalVisible(false);
    };

    const openActionModal = () => {
        setActionModalVisible(true);
        // actionSheetRef.current?.setModalVisible(false);
    };

    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={{ height: 70, backgroundColor: colors.appBgColor, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <Pressable
                    style={{ alignSelf: 'flex-start', flexDirection: 'row' }}
                    onPress={() => navigation.toggleDrawer()}>
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
                <Pressable
                    onPress={() => openActionModal()}>
                    <IconX style={{ fontSize: 30 }} origin={ICON_TYPE.MATERIAL_COMMUNITY} name={"filter-variant"} color={colors.white} />
                </Pressable>
            </View>
            {stateCars.length == 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                    <Text>No records found</Text>
                </View>
            ) : (
                <View style={{ margin: 10 }}>
                    <FlatList
                        data={stateCars}
                        initialNumToRender={10}
                        keyExtractor={({ item, index }) => index}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() => {
                                    setDefaultData(item)
                                    toggleModal()
                                }}
                                key={index}
                                style={{ padding: 20, marginBottom: index == stateCars.length - 1 ? 100 : 20, height: 'auto', borderRadius: 10, borderWidth: 1, borderColor: '#000' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={{
                                            uri: "https://img.freepik.com/free-photo/blue-wall-background_53876-88663.jpg"
                                        }}
                                        resizeMode="stretch"
                                        style={{ width: 100, height: 60, borderColor: '#000', borderWidth: 1 }}
                                    />
                                    <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
                                        <Text style={[commonStyles.text12]}>Brand : {item.brand}</Text>
                                        <Text style={[commonStyles.text12]}>Modal : {item.modal}</Text>
                                        <Text style={[commonStyles.text12]}>Transmission : {item.transmission}</Text>
                                        <Text style={[commonStyles.text12]}>Colour : {item.color}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                    >
                    </FlatList>
                </View>
            )}
            <CustomModal isVisible={isVisible} onClose={toggleModal} navigation={navigation} carItem={''} defaultVal={defaultData} />
            <Modal
                animationType="fade"
                transparent={true}
                visible={actionModalVisible}
                onRequestClose={closeActionModal}
                presentationStyle="overFullScreen"
                style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: '#fff' }}
            >
                <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Pressable onPress={closeActionModal}>
                        <IconX style={{ fontSize: 30, alignSelf: 'flex-end', margin: 10 }} origin={ICON_TYPE.IONICONS} name={"close"} color={colors.darkBlack} />
                    </Pressable>
                    <View style={commonStyles.filterView}>
                        <Text style={commonStyles.filterText}>Filter</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Pressable
                                style={[commonStyles.filterDoneBtnbg, { marginHorizontal: 30 }]}
                                onPress={() => handleReset()}
                            >
                                <Text style={commonStyles.filterDoneBtn}>Reset</Text>
                            </Pressable>
                            <Pressable
                                style={commonStyles.filterDoneBtnbg}
                                onPress={() => closeActionModal()}
                            >
                                <Text style={commonStyles.filterDoneBtn}>Done</Text>
                            </Pressable>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                            <Text style={{ marginBottom: 10 }}>Brand :</Text>
                            {carBrands.map((brand) => (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Checkbox.Android
                                        status={selectedBrands.includes(brand.id) ? 'checked' : 'unchecked'}
                                        onPress={() => handleCheckboxPress(brand.id)}
                                    />
                                    <Text style={{ marginLeft: 8 }}>{brand.name}</Text>
                                </View>
                            ))}
                        </View>
                        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                            <Text style={{ marginBottom: 10 }}>Fuel Type:</Text>
                            {fuelTypes.map((fuelType) => (
                                <View key={fuelType.label} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton.Android
                                        value={fuelType.value}
                                        status={selectedFuelType === fuelType.label ? 'checked' : 'unchecked'}
                                        onPress={() => handleFuelTypeChange(fuelType.label)}
                                    />
                                    <Text>{fuelType.value}</Text>
                                </View>
                            ))}
                        </View>
                        <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
                            <Text style={{ marginBottom: 10 }}>Transmission :</Text>
                            {transmissionType.map((item) => (
                                <View key={item.label} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton.Android
                                        value={item.label}
                                        status={selectedTransmission === item.label ? 'checked' : 'unchecked'}
                                        onPress={() => handleTransmissionChange(item.label)}
                                    />
                                    <Text>{item.value}</Text>
                                </View>
                            ))}
                        </View>
                        <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
                            <Text style={{ marginBottom: 10 }}>Price Range:</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Chip
                                    mode="outlined"
                                    selected={selectedPrice === 'lessThan2L'}
                                    onPress={() => handleChipPress('lessThan2L')}
                                    style={{ margin: 4, width: 150 }}
                                >
                                    Less than 2L
                                </Chip>
                                <Chip
                                    mode="outlined"
                                    selected={selectedPrice === '2Lto4L'}
                                    onPress={() => handleChipPress('2Lto4L')}
                                    style={{ margin: 4, width: 150 }}
                                >
                                    2L-4L
                                </Chip>
                                <Chip
                                    mode="outlined"
                                    selected={selectedPrice === '4Lto6L'}
                                    onPress={() => handleChipPress('4Lto6L')}
                                    style={{ margin: 4, width: 150 }}
                                >
                                    4L-6L
                                </Chip>
                                <Chip
                                    mode="outlined"
                                    selected={selectedPrice === 'moreThan6L'}
                                    onPress={() => handleChipPress('moreThan6L')}
                                    style={{ margin: 4, width: 150 }}
                                >
                                    More than 6L
                                </Chip>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                            <Text style={{ marginBottom: 10 }}>Owner :</Text>
                            {ownerTypes.map((ownerType) => (
                                <View key={ownerType.label} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <RadioButton.Android
                                        value={ownerType.label}
                                        status={selectedOwner === ownerType.label ? 'checked' : 'unchecked'}
                                        onPress={() => handleOwnerChange(ownerType.label)}
                                    />
                                    <Text>{ownerType.value}</Text>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Modal>

        </SafeAreaView>
    );
};

export default ViewDetails;
