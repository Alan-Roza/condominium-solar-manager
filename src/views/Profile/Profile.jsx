import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import api from "../../services/api";
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
import userContext from "../../config/userContext";

export default function Profile({ navigation }) {
  const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("Ocorreu um erro!");
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const userInfos = useContext(userContext);

  useEffect(() => {
    register("user");
    register("name");
  }, [register]);

  const deleteMyUser = async () => {
    try {
      console.log('deleted with success!')
      await api.delete(`/user/delete?id=${userInfos?.userInfos?.id}`)
      userInfos.setUserInfos({})
      navigation.push('Signin', {snackVisible: true, message: 'Usuário excluído com sucesso!'})
    } catch (error) {
      console.log(error);
      setErrorMessage(error.toString());
      setVisibleSnackbar(true);
    }
  };

  return (
    <LinearGradient
      colors={['#E3501D', '#EA5C2B88']}
      style={styles.generalContainer}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
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
          <Pressable style={styles.infoContainer} onPress={() => navigation.push('About')}>
            <Info style={styles.info} />
            <Text style={styles.infoText}>Sobre</Text>
          </Pressable>
          <Text style={styles.headerText}>
            DETALHES
          </Text>
          <Text style={styles.headerText}>
            DO PERFIL
          </Text>
        </View>

        <View style={[styles.userCard, styles.shadowProp]}>
          <Image style={styles.avatar} source={{ uri: 'https://wl-incrivel.cf.tsp.li/resize/728x/jpg/0ec/140/d189845022bb6eddb88bb5279a.jpg' }} />
          <View style={styles.textContainer}>
            <View style={{ justifyContent: 'center', flex: 1 }}>
              <Text style={styles.userName}>{userInfos?.userInfos?.name}</Text>
              <Text style={styles.level}>{userInfos?.userInfos?.principals === 'SINDICO' ? 'Síndico' : 'Administrador'}</Text>
            </View>
            <View style={styles.verifyContainer}>
              <Verify />
              <Text style={styles.verify}>Verificado</Text>
            </View>
          </View>
        </View>

        <View style={[styles.container]}>
          <Text style={[styles.label]}>Usuário</Text>
          <View style={styles.inputContainer}>
            <Person style={styles.prefix} />
            <TextInput
              editable={false}
              defaultValue={userInfos?.userInfos?.name}
              {...register("name", {
                required: "Informe o usuário!",
              })}
              style={styles.input}
              placeholder="Seu nome"
              placeholderTextColor="#EA5C2B"
            />
          </View>

          <Text style={[styles.label]}>E-mail</Text>
          <View style={styles.inputContainer}>
            <RegisterCard style={styles.prefix} />
            <TextInput
              editable={false}
              defaultValue={userInfos?.userInfos?.email}
              style={styles.input}
              placeholder="Seu e-mail"
              placeholderTextColor="#EA5C2B"
            />
          </View>

          <TouchableRipple
            borderless
            rippleColor="rgba(0, 0, 0, .2)"
            style={styles.button}
            onPress={() => {navigation.navigate('Signin'); userInfos.setUserInfos({})}}
          >
            <View style={styles.leaveButton}>
              <Leave />
              <TextPaper style={styles.buttonText}>
                Sair
              </TextPaper>
            </View>
          </TouchableRipple>

          <View style={styles.remove}>
            <Text style={styles.removeLink} onPress={() => deleteMyUser()}>Excluir usuário?</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
