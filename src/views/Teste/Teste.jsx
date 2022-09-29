import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput, Pressable } from 'react-native';
import styles from './styles';
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withRepeat, withTiming, withDelay, runOnJS, withSpring, withSequence } from 'react-native-reanimated';

export default function Teste() {
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

      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>

        <Svg height={height + 140} width={width}>
          <ClipPath id="clipID">
            <Ellipse cx={width / 1} rx={height} ry={height + 140} />
          </ClipPath>
          <Image
            href={require('../../../assets/images/bg.jpg')}
            height={height + 140}
            width={width + 140}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipID)"
          />
        </Svg>

        <Animated.View style={[styles.closeButton, closeAnimatedStyle]}>
          <Text onPress={() => imagePosition.value = 1}>X</Text>
        </Animated.View>

      </Animated.View>

      <View style={styles.logostyle}>
        <Svg height={300} width={300}>
          <Image
            href={require('../../../assets/images/logo.png')}
            height={300}
            width={300} /></Svg></View>

      <View style={styles.bottomContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler} >
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput placeholder="E-mail" placeholderTextColor="black" style={styles.TextInput} />
          {isRegister && (
            <TextInput placeholder="Name" placeholderTextColor="black" style={styles.TextInput} />
          )}
          <TextInput placeholder="Password" placeholderTextColor="black" style={styles.TextInput} />
          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable onPress={() => formButton.value = withSequence(withSpring(0.9), withSpring(1))}>
              <Text style={styles.buttonText} >{isRegister ? 'REGISTER' : 'LOG IN'}</Text>
            </Pressable>
          </Animated.View>

        </Animated.View>

      </View>

    </Animated.View>
  )
}