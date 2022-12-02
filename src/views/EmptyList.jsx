import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple, Text as TextPaper, } from "react-native-paper";

export default function EmptyList({onRefresh}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nenhum dado encontrado!</Text>
      <TouchableRipple
          borderless
          rippleColor="rgba(0, 0, 0, .2)"
          style={styles.button}
          onPress={() => onRefresh()}
        >
          <TextPaper style={styles.buttonText}>
            Recarregar
          </TextPaper>
        </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#545454',
  },
  button: {
    backgroundColor: "#EA5C2B",
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 50,
    height: 50,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
})