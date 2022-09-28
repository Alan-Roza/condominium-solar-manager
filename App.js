import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style='dark' backgroundColor='transparent' translucent hidden={false} />
    </SafeAreaProvider>
  );
  
}
