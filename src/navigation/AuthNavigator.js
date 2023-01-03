import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import Main from '../ui/screens/Main';
import Login from '../ui/screens/Login';
import LoginMain from '../ui/screens/LoginMain';
import Register from '../ui/screens/Register';
import Verify from '../ui/screens/Verify';
import Password from '../ui/screens/Password';
import Home from '../ui/screens/Home';
import HomeNavigator from './HomeNavigator';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.MAIN} component={Main} />
      <Stack.Group>
        <Stack.Screen name={routes.LOGINMAIN} component={LoginMain} />
        <Stack.Screen name={routes.LOGIN} component={Login} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name={routes.REGISTER} component={Register} />
        <Stack.Screen name={routes.VERIFY} component={Verify} />
        <Stack.Screen name={routes.PASSWORD} component={Password} />
      </Stack.Group>
      {/* <HomeNavigator /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
