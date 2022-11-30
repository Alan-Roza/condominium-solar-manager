import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from "react-native";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import {
  Text as TextPaper,
  TouchableRipple,
  Snackbar,
} from "react-native-paper";
import { ErrorMessage } from "@hookform/error-message";
import { styles } from './style'
import RegisterCard from '../../../assets/icons/RegisterCard'
import Password from '../../../assets/icons/Password'
import { LinearGradient } from "expo-linear-gradient";
import userContext from "../../config/userContext";

export default function Signin({ route, navigation }) {
  const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);
  const [users, setUsers] = React.useState([]);
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
    register("email");
    register("password");
  }, [register]);

  useEffect(() => {
    if(route.params?.snackVisible) {
      setVisibleSnackbar(true)
      setErrorMessage(route.params?.message)
    }
  }, [route.params]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await api.get('/user/list')

        if (response?.data) setUsers(response?.data?.data)
      } catch (error) {
        console.log(error)
      }
    }

    getUsers()
  }, [])

  const onSubmit = async (data) => {
    try {
      console.log('successfully Logged!', data)

      const userLogin = users.find((user) => user?.email?.toLowerCase() === data?.email?.toLowerCase())
      
      if (!userLogin) throw new Error('Usuário não encontrado!')
      if (userLogin.password !== data.password) throw new Error('Senha inválida!')

      userInfos.setUserInfos(userLogin)
      navigation.navigate("Root");
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
        <Image resizeMode="contain" style={styles.logo} source={require('../../../assets/images/lorem-logo.png')} />
        <View style={styles.headerText}>
          <Text style={styles.welcomeText}>
            Bem-vindo de volta
          </Text>
          <Text style={styles.subtitleText}>
            Faça login na sua conta
          </Text>
        </View>
      </View>

      <ScrollView
        style={[styles.container]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title]}>
          Sign In
        </Text>

        <Text style={[styles.label]}>Usuário</Text>
        <View style={styles.inputContainer}>
          <RegisterCard style={styles.prefix} />
          <TextInput
            defaultValue=''
            {...register("email", {
              required: "Informe o e-mail!",
            })}
            style={styles.input}
            onChangeText={(text) => setValue("email", text)}
            placeholder="Digite o e-mail"
            placeholderTextColor="#EA5C2B"
          />
        </View>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <Text key={type} style={styles.errorMessage}>
                {message}
              </Text>
            ))
          }
        />

        <Text style={[styles.label]}>Senha</Text>
        <View style={styles.inputContainer}>
          <Password style={styles.prefix} />
          <TextInput
            defaultValue=''
            {...register("password", {
              required: "É necessário informar a senha!",
            })}
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => setValue("password", text)}
            placeholder="Digite a senha"
            placeholderTextColor="#EA5C2B"
          />
        </View>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <Text key={type} style={styles.errorMessage}>
                {message}
              </Text>
            ))
          }
        />

        <TouchableRipple
          borderless
          rippleColor="rgba(0, 0, 0, .2)"
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <TextPaper style={styles.buttonText}>
            Acessar
          </TextPaper>
        </TouchableRipple>

        <View style={styles.register}>
          <Text style={styles.registerText}>Ainda não é cadastrado? </Text>
          <Text style={styles.registerLink} onPress={() => navigation.navigate('Signup')}>Cadastrar</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
