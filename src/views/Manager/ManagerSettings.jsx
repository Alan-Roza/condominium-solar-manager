import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Pressable, FlatList, TouchableOpacity, Modal } from "react-native";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import {
    Text as TextPaper,
    TouchableRipple,
    Snackbar,
} from "react-native-paper";
import { styles } from './style'
import ManagerSettingCard from "./ManagerSettingCard";
import { FloatingAction } from "react-native-floating-action";
import Plus from "../../../assets/icons/Plus";
import CloseIcon from "../../../assets/icons/CloseIcon";

const mainAction = [
    {
        text: "Adicionar",
        icon: <Plus color={'white'} />,
        name: "bt_add",
        position: 1,
        color: "#EA5C2B",
    },
];

export default function ManagerSettings({ navigation }) {
    const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [managerData, setManagerData] = React.useState([{ name: 'Eduardo', id: '1' }, { name: 'Francisco', id: '2' }]);
    const [errorMessage, setErrorMessage] = React.useState("Ocorreu um erro!");
    const {
        register,
        setValue,
        formState: { errors },
        handleSubmit,
    } = useForm({
        criteriaMode: "all",
    });

    const onSubmit = async (data) => {
        try {
            console.log('successfully Logged!', data)
            navigation.navigate("Root");
        } catch (error) {
            console.log(error);
            setErrorMessage(error.toString());
            setVisibleSnackbar(true);
        }
    };

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // this.closeButtonFunction()
                }}>
                <View
                    style={{
                        height: '70%',
                        marginTop: 'auto',
                        backgroundColor: '#fff',
                        elevation: 30,
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.closeIcon}>
                            <CloseIcon color={'#EA5C2B'} />
                        </View>

                    </TouchableOpacity>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ color: "#EA5C2B", fontSize: 22, fontWeight: '800' }}>SÍNDICOS</Text>
                        <Text style={{ color: "#545454", fontSize: 17, lineHeight: 17 }}>Adicionar ao condomínio</Text>
                    </View>

                    <View style={[styles.containerManager]}>
                        <FlatList
                            contentContainerStyle={{ flex: 1 }}
                            data={managerData}
                            renderItem={({ item }) => (
                                <ManagerSettingCard isPlus={true} manager={item} onHandlePress={() => setModalVisible(!modalVisible)} />
                            )}
                        />
                    </View>
                </View>
            </Modal>

            <View showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#FFF' }}>
                <Snackbar
                    style={{ zIndex: 100 }}
                    visible={visibleSnackbar}
                    duration={2000}
                    onDismiss={() => setVisibleSnackbar((prev) => !prev)}
                    action={{
                        label: "Fechar",
                    }}
                >
                    {errorMessage}
                </Snackbar>

                <View style={styles.header}>
                    <Text style={styles.headerTextManager}>
                        GERENCIAR
                    </Text>
                    <Text style={styles.headerTextManager}>
                        SÍNDICOS
                    </Text>
                </View>

                <View style={[styles.containerManager]}>
                    <FlatList
                        contentContainerStyle={{ flex: 1 }}
                        data={managerData}
                        renderItem={({ item }) => (
                            <ManagerSettingCard manager={item} onHandlePress={() => console.log('press')} />
                        )}
                    />
                </View>
            </View>

            <FloatingAction
                color="#EA5C2B"
                actions={mainAction}
                overrideWithAction={true}
                showBackground={false}
                iconHeight={30}
                iconWidth={30}
                animated={false}
                onPressItem={() => {
                    setModalVisible(true)
                }}
            />
        </>
    );
}
