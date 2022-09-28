import {StyleSheet, View, Text, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
      <Button title='Navigate' onPress={() => navigation.navigate('Dashboard')}></Button>
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