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
import Engine from '../../../assets/icons/Engine'
import Key from '../../../assets/icons/Key'
import { Picker } from "@react-native-picker/picker";

export default function Signup({ navigation }) {
  const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);
  const [levelSelect, setLevelSelect] = React.useState('manager');
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
    register("password");
    register("confirmPassword");
    register("level");
    register("code");
  }, [register]);

  const onSubmit = async (data) => {
    try {
      console.log('successfully Logged!')
      navigation.push("home");
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
        <Image resizeMode="contain" style={styles.logo} source={require('../../../assets/images/lorem-logo.png')} />
        <View style={styles.headerText}>
          <Text style={styles.welcomeText}>
            Seja bem-vindo
          </Text>
          <Text style={styles.subtitleText}>
            Para começar, crie seu cadastro
          </Text>
        </View>
      </View>

      <ScrollView
        style={[styles.container]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title]}>
          Sign Up
        </Text>

        <Text style={[styles.label]}>Usuário</Text>
        <View style={styles.inputContainer}>
          <Person style={styles.prefix} />
          <TextInput
            defaultValue=''
            {...register("user", {
              required: "Informe um usuário!",
            })}
            style={styles.input}
            onChangeText={(text) => setValue("user", text)}
            placeholder="Digite um usuário"
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

        <Text style={[styles.label]}>Confirmar Senha</Text>
        <View style={styles.inputContainer}>
          <Password style={styles.prefix} />
          <TextInput
            defaultValue=''
            {...register("password", {
              required: "É necessário informar a mesma senha!",
            })}
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => setValue("confirmPassword", text)}
            placeholder="Digite a mesma senha"
            placeholderTextColor="#EA5C2B"
          />
        </View>
        <ErrorMessage
          errors={errors}
          name="confirmPassword"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <Text key={type} style={styles.errorMessage}>
                {message}
              </Text>
            ))
          }
        />

        <Text style={[styles.label]}>Nível</Text>
        <View style={styles.inputContainer}>
          <Engine style={styles.prefix} />
          <Picker
            style={styles.selectPicker}
            selectedValue={levelSelect}
            onValueChange={(value) => setLevelSelect(value)}
            dropdownIconColor="#EA5C2B"
            dropdownIconRippleColor="#EA5C2B15"
          >
            <Picker.Item label="Síndico" value="manager" />
            <Picker.Item label="Administrador" value="administrator" />
          </Picker>
        </View>
        <ErrorMessage
          errors={errors}
          name="level"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <Text key={type} style={styles.errorMessage}>
                {message}
              </Text>
            ))
          }
        />

        <Text style={[styles.label]}>Código</Text>
        <View style={styles.inputContainer}>
          <Key style={styles.prefix} />
          <TextInput
            defaultValue=''
            {...register("code", {
              required: "É necessário informar o código!",
            })}
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => setValue("code", text)}
            placeholder="Código para cadastro"
            placeholderTextColor="#EA5C2B"
          />
        </View>
        <ErrorMessage
          errors={errors}
          name="code"
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
            Cadastrar
          </TextPaper>
        </TouchableRipple>

        <View style={styles.register}>
          <Text style={styles.registerText}>Já possui cadastro? </Text>
          <Text style={styles.registerLink} onPress={() => navigation.navigate('Signin')}>Entrar</Text>
        </View>
      </ScrollView>
    </View >
  );
}
