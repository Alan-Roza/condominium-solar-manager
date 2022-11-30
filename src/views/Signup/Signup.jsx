import React, { useEffect } from "react";
import { Text, View, TextInput, ScrollView, Image } from "react-native";
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
import RegisterCard from '../../../assets/icons/RegisterCard'
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";

export default function Signup({ navigation }) {
  const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);
  const [levelSelect, setLevelSelect] = React.useState('SINDICO');
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
    register("name");
    register("email");
    register("password");
    register("confirmPassword");
    register("principals");
    register("createCode");
  }, [register]);

  const onSubmit = async (data) => {
    try {
      // console.log('successfully Logged!', data)
      if (data.password !== data.confirmPassword) throw new Error('As senhas devem ser iguais!')

      if (levelSelect === 'ADMIN' && data.createCode !== 'ADMIN-COD') throw new Error('Código inválido para Administrador!')
      if (levelSelect === 'SINDICO' && data.createCode !== 'SINDICO-COD') throw new Error('Código inválido para Síndico!')

      const formattedData = {
        name: data.name,
        email: data.email,
        password: data.password,
        principals: levelSelect,
        createCode: data.createCode,
        avatarUrl: "https://paraty.com.br/wp-content/uploads/2022/05/zeca-pagodinho-em-paraty.jpg",
      }

      const response = await api.post('/user/create', formattedData)

      if (response) navigation.navigate("Signin");
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
            {...register("name", {
              required: "Informe seu nome!",
            })}
            style={styles.input}
            onChangeText={(text) => setValue("name", text)}
            placeholder="Digite seu nome"
            placeholderTextColor="#EA5C2B"
          />
        </View>
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <Text key={type} style={styles.errorMessage}>
                {message}
              </Text>
            ))
          }
        />

        <Text style={[styles.label]}>E-mail</Text>
        <View style={styles.inputContainer}>
          <RegisterCard style={[styles.prefix]} />
          <TextInput
            defaultValue=''
            {...register("email", {
              required: "Informe seu e-mail!",
            })}
            style={styles.input}
            onChangeText={(text) => setValue("email", text)}
            placeholder="Digite seu e-mail"
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
            onValueChange={(value) => {setLevelSelect(value);setValue("principals", value)}}
            dropdownIconColor="#EA5C2B"
            dropdownIconRippleColor="#EA5C2B15"
          >
            <Picker.Item label="Síndico" value="SINDICO" />
            <Picker.Item label="Administrador" value="ADMIN" />
          </Picker>
        </View>
        <ErrorMessage
          errors={errors}
          name="principals"
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
            {...register("createCode", {
              required: "É necessário informar o código!",
            })}
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => setValue("createCode", text)}
            placeholder="Código para cadastro"
            placeholderTextColor="#EA5C2B"
          />
        </View>
        <ErrorMessage
          errors={errors}
          name="createCode"
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
    </LinearGradient>
  );
}
