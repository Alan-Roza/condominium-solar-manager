import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Pressable, FlatList, TouchableOpacity, Modal, ActivityIndicator } from "react-native";
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
import EmptyList from "../EmptyList";

const mainAction = [
    {
        text: "Adicionar",
        icon: <Plus color={'white'} />,
        name: "bt_add",
        position: 1,
        color: "#EA5C2B",
    },
];

export default function ManagerSettings({ route, navigation }) {
    const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [loadingUsers, setLoadingUsers] = React.useState(false);
    const [usersSindicos, setUsersSindicos] = React.useState([]);
    const [condominiumSindicos, setCondominiumSindicos] = React.useState([]);
    const [errorMessage, setErrorMessage] = React.useState("Ocorreu um erro!");

    const getSpecificCondominium = async (id) => {
        setLoading(true)
        try {
            const response = await api.get('/condominio/list?sindicoId=*')

            const specificCond = response?.data?.data?.find((item) => item?.id?.includes(id))

            const allUsers = await api.get('/user/list')

            if (allUsers && specificCond) {
                const filteredUsers = allUsers?.data?.data?.filter((user) => specificCond?.sindicos?.includes(user?.id))
                setCondominiumSindicos(filteredUsers)
            }
        } catch (error) {
            console.log(error)
            setErrorMessage(error.toString());
            setVisibleSnackbar(true);
        }
        setLoading(false)
    }

    const addSindicoUser = async (id) => {
        setLoading(true)
        try {
            await api.post('/condominio/addSindico', {
                condominioId: route.params?.manager?.id,
                sindicoId: id
            })
            setErrorMessage('Síndico adicionado com sucesso!');
            setVisibleSnackbar(true);
        } catch (error) {
            console.log(error)
            setErrorMessage(error.toString());
            setVisibleSnackbar(true);
        }
        setLoading(false)
    }

    const removeSindicoUser = async (id) => {
        setLoading(true)
        try {
            await api.post('/condominio/removeSindico', {
                condominioId: route.params?.manager?.id,
                sindicoId: id
            })
            setErrorMessage('Síndico removido com sucesso!');
            setVisibleSnackbar(true);
        } catch (error) {
            console.log(error)
            setErrorMessage(error.toString());
            setVisibleSnackbar(true);
        }
        setLoading(false)
    }

    useEffect(() => {
        getSpecificCondominium(route.params?.manager?.id)
    }, [route.params?.manager])

    const getUsersBySindico = async () => {
        setLoadingUsers(true)
        try {
            const response = await api.get('/user/list')

            if (response?.data?.data) {
                const filteredUsers = response?.data?.data.filter((user) => user?.principals?.includes('SINDICO'))
                setUsersSindicos(filteredUsers)
            }
        } catch (error) {
            console.log(error)
            setErrorMessage(error.toString());
            setVisibleSnackbar(true);
        }
        setLoadingUsers(false)
    }

    useEffect(() => {
        getUsersBySindico()
    }, [])

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
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
                        {loadingUsers ? (
                            <ActivityIndicator
                                style={{ flex: 1 }}
                                size="large"
                                color='#EA5C2B'
                            />
                        ) : (

                            <FlatList
                                ListEmptyComponent={() => <EmptyList onRefresh={() => getUsersBySindico()} />}
                                contentContainerStyle={{ flex: 1 }}
                                data={usersSindicos}
                                renderItem={({ item }) => (
                                    <ManagerSettingCard isPlus={true} manager={item} onHandlePress={() => {
                                        addSindicoUser(item.id)
                                        getUsersBySindico()
                                        setModalVisible(!modalVisible)
                                        getSpecificCondominium(route.params?.manager?.id)
                                    }} />
                                )}
                            />
                        )}
                    </View>
                </View>
            </Modal>

            <View showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#FFF' }}>
                <Snackbar
                    style={{ zIndex: 100, marginBottom: 100 }}
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
                    {loading ? (
                        <ActivityIndicator
                            style={{ flex: 1 }}
                            size="large"
                            color='#EA5C2B'
                        />
                    ) : (
                        <FlatList
                            ListEmptyComponent={() => <EmptyList onRefresh={() => getSpecificCondominium(route.params?.manager?.id)} />}
                            contentContainerStyle={{ flex: 1 }}
                            data={condominiumSindicos}
                            renderItem={({ item }) => (
                                <ManagerSettingCard manager={item} onHandlePress={() => removeSindicoUser(item.id)} />
                            )}
                        />
                    )}
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
