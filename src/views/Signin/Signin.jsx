import {StyleSheet, View, Text, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function Signin({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Signin screen</Text>
      <Button title='Navigate' onPress={() => navigation.navigate('NotFound')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});