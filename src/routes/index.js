import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { View, TouchableHighlight } from 'react-native';


import NotFoundScreen from '../views/NotFoundScreen';
import Signin from '../views/Signin/Signin';
import Dashboard from '../views/Dashboard/Dashboard';
import Profile from '../views/Profile/Profile';
import ProfileIcon  from '../../assets/icons/Profile';
import ManagerIcon  from '../../assets/icons/Manager';
import InfoIcon  from '../../assets/icons/Info';
import DashboardIcon  from '../../assets/icons/Dashboard';
import Manager from '../views/Manager/Manager';
import Signup from '../views/Signup/Signup';
import About from '../views/About/About';
import DashboardDetails from '../views/Dashboard/DashboardDetails';
import ManagerSettings from '../views/Manager/ManagerSettings';
import userContext from '../config/userContext';

export default function Navigation() {
  return (
    <NavigationContainer
      theme={DarkTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

//All navigation inside the app
function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Signin' screenOptions={{headerStyle: {backgroundColor: '#EA5C2B'}}}>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="ManagerSettings" component={ManagerSettings} options={({ route }) => ({ title: route.params?.manager?.name })} />
      <Stack.Screen name="DashboardDetails" component={DashboardDetails} options={({ route }) => ({ title: 'Detalhes do Condomínio' })} />
      <Stack.Screen name="About" component={About} options={{ title: 'Sobre o Aplicativo' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="transparent"
    activeOpacity={1}
  >
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        top: -45,
        width: 65,
        height: 65,
        borderWidth: 2,
        borderColor: '#EA5C2B',
        borderRadius: 35,
        backgroundColor: '#FFF'
      }}
    >
      {children}
    </View>
  </TouchableHighlight>
)

// Bottom tab inside the app
function BottomTabNavigator() {
  const {userInfos} = React.useContext(userContext);

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 55,
          paddingTop: 5,
          paddingBottom: 5,
          marginHorizontal: -40,
          backgroundColor: '#EA5C2B',
          borderTopColor: 'transparent',
        },
        // tabBarHideOnKeyboard: true, // TODO hide bottom navigation when typing
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      }}>
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Usuário',
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ navigation }) => ({
          title: 'Dashboard',
          tabBarLabelStyle: {marginBottom: -17, marginTop: 17},
          tabBarIcon: ({ color, focused }) => <DashboardIcon style={{ bottom: -5 }} color={'#EA5C2B'} />,
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        })}
      />
      {userInfos.principals?.includes('ADMIN') ? (
        <BottomTab.Screen
          name="Manager"
          component={Manager}
          options={{
            title: 'Gerenciar',
            tabBarIcon: ({ color }) => <ManagerIcon color={color} />,
          }}
        />
      ) : (
        <BottomTab.Screen
          name="About"
          component={About}
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color }) => <InfoIcon color={color} />,
          }}
        />
      )}
    </BottomTab.Navigator>
  );
}