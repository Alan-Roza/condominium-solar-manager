import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput, Pressable, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import Svg, { Image, Ellipse, ClipPath, Circle } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withRepeat, withTiming, withDelay, runOnJS, withSpring, withSequence } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function Signin({ navigation }) {
  const { height, width } = Dimensions.get('window');
  const imagePosition = useSharedValue(1);
  const formButton = useSharedValue(1);
  const [isRegister, setIsRegister] = useState(false);


  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 1.5, 0])
    return {
      transform: [{ translateY: withTiming(interpolation, { duration: 700 }) }]
    }
  })

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0])
    return {
      opacity: withTiming(imagePosition.value, { duration: 400 }),
      transform: [{ translateY: withTiming(interpolation, { duration: 900 }) }]
    };
  })

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, { duration: 800 })) : withTiming(0, { duration: 300 }),
    };
  })

  const formButtonBackgroundAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [0, height])
    return {
      opacity: imagePosition.value === 0 ? withTiming(1, { duration: 400 }) : withTiming(0, { duration: 300 }),
      transform: [{ translateY: withTiming(interpolation, { duration: 900 }) }]
    };
  })

  const closeAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360])
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 400 }),
      transform: [{ rotate: withTiming(interpolation + "deg", { duration: 800 }) }]
    };
  })

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: formButton.value }]
    }
  })

  const loginHandler = () => {
    imagePosition.value = 0
    if (isRegister) {
      setIsRegister(false);
      //runOnJS(setIsRegister)(false);
    }
  }

  const registerHandler = () => {
    imagePosition.value = 0
    if (!isRegister) {
      setIsRegister(true);
      //runOnJS(setIsRegister)(true);
    }
  }

  return (
    <Animated.View style={styles.container}>

      <View style={[StyleSheet.absoluteFill]}>
        <LinearGradient
          colors={['#E4531E', '#F69753']}
          height={height + 50}
          width={width}
        />

        {/* <Svg height={height + 140} width={width}>
          <Image
            href={require('../../../assets/images/backgroundGradient.png')}
            height={height + 140}
            width={width + 140}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipID)"
          />
        </Svg> */}
      </View>

      {/* <View style={[styles.logostyle]}>
        <Svg height={250} width={300}>
          <Image
            href={require('../../../assets/images/logo.png')}
            height={200}
            width={300} />
        </Svg>
      </View> */}

      <View style={[StyleSheet.absoluteFill, {justifyContent: 'flex-end', backgroundColor: 'red', marginBottom: 70}]}>
        <Animated.View style={[buttonAnimatedStyle]}>
          <Pressable style={styles.button} onPress={loginHandler} >
            <Text style={styles.screenButtonText}>Entrar</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.screenButtonText}>Cadastrar</Text>
          </Pressable>
        </Animated.View>
      </View>

{console.log(imagePosition.value)}
      <KeyboardAvoidingView behavior='height'>
          <Animated.View style={[styles.closeButton, closeAnimatedStyle]}>
          <Text onPress={() => imagePosition.value = 1}>X</Text>
        </Animated.View>
        <Animated.View style={[styles.bottomContainer, formButtonBackgroundAnimatedStyle]}>
          <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
            <ScrollView contentContainerStyle={{ marginTop: 'auto', marginBottom: 'auto', justifyContent: 'center' }}>
              <TextInput placeholder="Digite o seu usuário" placeholderTextColor="black" style={styles.TextInput} />
              <TextInput placeholder="Digite a sua senha" placeholderTextColor="black" style={styles.TextInput} />
              {isRegister && (
                <>
                  <TextInput placeholder="Digite a mesma senha" placeholderTextColor="black" style={styles.TextInput} />
                  <TextInput placeholder="Administrador" placeholderTextColor="black" style={styles.TextInput} />
                  <TextInput placeholder="Código" placeholderTextColor="black" style={styles.TextInput} />
                  <TextInput placeholder="Código" placeholderTextColor="black" style={styles.TextInput} />
                  <TextInput placeholder="Código" placeholderTextColor="black" style={styles.TextInput} />
                  <TextInput placeholder="Código" placeholderTextColor="black" style={styles.TextInput} />
                </>
              )}
              <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
                <Pressable onPress={() => formButton.value = withSequence(withSpring(0.9), withSpring(1))}>
                  <Text style={styles.buttonText} >{isRegister ? 'CADASTRAR' : 'ENTRAR'}</Text>
                </Pressable>
              </Animated.View>
            </ScrollView>
          </Animated.View>
        </Animated.View>
      </KeyboardAvoidingView>
    </Animated.View>
  )
}