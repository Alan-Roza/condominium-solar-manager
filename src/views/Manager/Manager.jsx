import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Pressable, FlatList } from "react-native";
import { useForm } from "react-hook-form";
import {
  Text as TextPaper,
  TouchableRipple,
  Snackbar,
} from "react-native-paper";
import { ErrorMessage } from "@hookform/error-message";
import { styles } from './style'
import Person from '../../../assets/icons/Person'
import Verify from '../../../assets/icons/Verify'
import RegisterCard from '../../../assets/icons/RegisterCard'
import Leave from '../../../assets/icons/Leave'
import Info from '../../../assets/icons/Info'
import { LinearGradient } from "expo-linear-gradient";
import SearchInput from "./SearchInput";
import ManagerCard from "./ManagerCard";
import api from "../../services/api";

export default function Manager({ navigation }) {
  const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);
  const [condiminiunsData, setCondominiunsData] = React.useState([]);
  const [condiminiunsSearchData, setCondominiunsSearchData] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("Ocorreu um erro!");
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    const getCondominiuns = async () => {
      try {
        const response = await api.get('/condominio/list?sindicoId=*')

        if (response?.data) setCondominiunsData(response?.data?.data)
        console.log(response?.data?.data)
      } catch (error) {
        console.log(error)
      }
    }

    getCondominiuns()
  }, [])

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

  const onSearch = (search) => {
    setCondominiunsSearchData(condiminiunsData.filter((item) => (item?.name?.toLowerCase()).startsWith(search?.toLowerCase())))
  }

  useEffect(() => {
    onSearch('')
  }, [])

  return (
    <LinearGradient
      colors={['#E3501D', '#EA5C2B88']}
      style={styles.generalContainer}
    >
      <View showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Snackbar
          style={{ zIndex: 1000 }}
          visible={visibleSnackbar}
          duration={2000}
          marginBottom={50}
          onDismiss={() => setVisibleSnackbar((prev) => !prev)}
          action={{
            label: "Fechar",
          }}
        >
          {errorMessage}
        </Snackbar>

        <View style={styles.header}>
          <Text style={styles.headerText}>
            GERENCIAR
          </Text>
          <Text style={styles.headerText}>
            CONDOMÍNIOS
          </Text>
        </View>

        <View style={styles.search}>
          <SearchInput onSearch={(search) => onSearch(search)} />
        </View>

        <View style={[styles.container]}>
          <FlatList
            style={{ paddingTop: 50 }}
            contentContainerStyle={{ paddingBottom: 50 }}
            data={condiminiunsSearchData}
            renderItem={({ item }) => (
              <ManagerCard condominium={item} onHandlePress={() => navigation.navigate('ManagerSettings')} />
            )}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
