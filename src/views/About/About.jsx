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
import Person from '../../../assets/icons/Person'
import Password from '../../../assets/icons/Password'

export default function About({ navigation }) {
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

  useEffect(() => {
    register("user");
    register("name");
  }, [register]);

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
    <View style={styles.generalContainer}>
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
        <Text style={styles.headerText}>
          DETALHES DO PERFIL
        </Text>
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
          <Person style={styles.prefix} />
          <TextInput
            defaultValue=''
            {...register("user", {
              required: "Informe o usuário!",
            })}
            style={styles.input}
            onChangeText={(text) => setValue("user", text)}
            placeholder="Digite o usuário"
            placeholderTextColor="#EA5C2B"
          />
        </View>
        <ErrorMessage
          errors={errors}
          name="user"
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
    </View>
  );
}
