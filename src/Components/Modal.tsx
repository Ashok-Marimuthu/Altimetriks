import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Button, Dimensions, SafeAreaView, Pressable, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import colors from '../Colors';
import { ICON_TYPE, IconX } from '../Icons';
import commonStyles from '../Styles';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import formData from '../data.json';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, updateCar } from '../Store/Reducers/carSlice';
import { RootState } from '../Store';

interface CustomModalProps {
    isVisible: boolean;
    onClose: () => void;
    navigation: any;
    carItem: any,
    defaultVal: any
}

type FormData = Record<string, string>;

const CustomModal: React.FC<CustomModalProps> = ({ isVisible, onClose, navigation, carItem, defaultVal }) => {
    const { control, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>({
        defaultValues: defaultVal
    });
    const dispatch = useDispatch();
    const carState = useSelector((state: RootState) => state.car);

    const onSubmit: SubmitHandler<FormData> = (data) => {
        onClose();
        if (defaultVal == '') {
            Alert.alert("Data Saved Successfully", JSON.stringify(data));
            data['brand'] = carItem['id'];
            data['index'] = carState.cars.length;
            dispatch(addCar({ car: data }));
        } else {
            Alert.alert("Data Updated Successfully", JSON.stringify(data));
            const updatedCarData = {
                index: defaultVal.index,
                car: data,
            };
            dispatch(updateCar(updatedCarData));
        }
    };

    useEffect(() => {
        reset(defaultVal)
    }, [defaultVal]);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
            presentationStyle="overFullScreen"
            style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        >
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
                    <View style={{ backgroundColor: colors.lightGrey, height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
                        <Text style={{ color: colors.white, fontSize: 16 }}>{defaultVal == '' ? 'Add Car Details' : 'Edit Car Details'}</Text>
                        <Pressable onPress={onClose}>
                            <IconX style={{ fontSize: 30 }} origin={ICON_TYPE.IONICONS} name={"close"} color={colors.white} />
                        </Pressable>
                    </View>

                    <ScrollView style={{ flexDirection: 'column', backgroundColor: '#fff', padding: 20 }} showsVerticalScrollIndicator={false}>
                        {formData.formData.map((item, index) => (
                            <View key={item.id}>
                                <Text style={{ marginTop: 10 }}>{item.name} :</Text>
                                {item.type == 'text' || item.type == 'number' ?
                                    <View style={{ marginVertical: 10 }}>
                                        <Controller
                                            control={control}
                                            render={({ field }) => (
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder={`Enter ${item.name}`}
                                                    maxLength={item.maxlength}
                                                    value={field.value}
                                                    onChangeText={(text) => {
                                                        field.onChange(text);
                                                    }}
                                                />
                                            )}
                                            name={item.id}
                                            rules={{ required: item.is_mandatory === 'Y' }}
                                        />
                                        {errors[item.id] &&
                                            <Text style={{ fontSize: 16, color: 'red', letterSpacing: 0.5, width: Dimensions.get("screen").width - 40, }}>
                                                {errors[item.id]?.message ? errors[item.id]?.message : item.name + ' is required'}
                                            </Text>
                                        }
                                    </View>
                                    :
                                    <View style={{ marginVertical: 5 }}>
                                        <Controller
                                            control={control}
                                            name={item.name}
                                            render={({ field }) => (
                                                <Pressable style={{
                                                    flexDirection: 'row',
                                                    height: 40,
                                                    borderColor: 'gray',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    borderWidth: 1,
                                                    paddingHorizontal: 10,
                                                    borderRadius: 5,
                                                    overflow: 'hidden',
                                                    width: Dimensions.get('screen').width - 40,
                                                }}
                                                    onPress={() => {
                                                        ImageCropPicker.openPicker({
                                                            width: Dimensions.get('window').width,
                                                            height: 250,
                                                            cropping: true,
                                                            mediaType: 'photo',
                                                            cropperToolbarTitle: `Choose ${item.name}\nCrop the image by adjusting the box`,
                                                            multiple: false,
                                                            maxFiles: 1,
                                                            minFiles: 1,
                                                            freeStyleCropEnabled: true,
                                                        }).then((image) => {
                                                            field.onChange(image.sourceURL);
                                                        }).catch((err) => {
                                                            console.error(err);
                                                        });
                                                    }}>
                                                    <Text
                                                        numberOfLines={1}
                                                        style={{
                                                            width: Dimensions.get('screen').width - 100,
                                                            marginRight: 10
                                                        }}
                                                    >
                                                        {field.value}
                                                    </Text>
                                                    <IconX
                                                        origin={ICON_TYPE.MATERIAL_COMMUNITY}
                                                        name={"file-upload"}
                                                        style={{
                                                            fontSize: 30,
                                                        }}
                                                        color={colors.darkBlack}
                                                    />
                                                </Pressable>

                                            )}
                                        />
                                    </View>
                                }
                            </View>
                        ))}
                        <Pressable
                            onPress={handleSubmit(onSubmit)}
                            style={{ padding: 10, width: 150, alignSelf: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 6, borderColor: colors.darkBlack, marginTop: 50, marginBottom: 100 }}
                        >
                            <Text>Submit</Text>
                        </Pressable>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </Modal>
    );
};

export default CustomModal;

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: Dimensions.get('screen').width - 40,
    },
});
