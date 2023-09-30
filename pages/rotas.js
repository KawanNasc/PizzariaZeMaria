import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from 'home';
import Login from 'login';


const Stack = createStackNavigator();

export default function Rotas() {

  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Sreen name="home" component={Home} options={{headerShown: false, title: "Home"}} />
        <Stack.Sreen name="login" component={Login} options={{headerShown: false, title: "Login"}} />
      </Stack.Navigator>
      </NavigationContainer>
  );

}