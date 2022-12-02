import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './src/routes';
import userContext from "./src/config/userContext";
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs()

export default function App() {
  const [userInfos, setUserInfos] = useState({})

  return (
    <userContext.Provider value={{userInfos, setUserInfos}}>
        <SafeAreaProvider>
          <Router />
          <StatusBar style='light' backgroundColor='transparent' translucent hidden={false} />
        </SafeAreaProvider>
    </userContext.Provider>
  )
}
