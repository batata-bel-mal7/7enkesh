import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerStack from './DrawerStack'
import NoIternet from '../ui/pages/NoInternet'
import { NetworkInfoState } from '../redux/networkInfo/networkInfoSlice'
import SplashScreen from '../ui/pages/SplashScreen'
import Login from '../ui/pages/Login'
import { UserState } from '../redux/user/userSlice'
import Register from '../ui/pages/Register'

export type MainStackParamList = {
  Splash: undefined
  Login: undefined
  DrawerStack: undefined
  NoIternet: undefined
  Regiter: undefined
}

const Stack = createStackNavigator<MainStackParamList>()

const MainStack = ({
  netinfo,
  user,
}: {
  netinfo: NetworkInfoState
  user: UserState
}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'skyblue',
        },
      }}
    >
      {netinfo.isInternetReachable ? (
        <>
          {user.user === null && (
            <Stack.Screen name="Splash" component={SplashScreen} />
          )}
          {user.user ? (
            <Stack.Screen name="DrawerStack" component={DrawerStack} />
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Regiter" component={Register} />
            </>
          )}
        </>
      ) : (
        <Stack.Screen name="NoIternet" component={NoIternet} />
      )}
    </Stack.Navigator>
  )
}
export default MainStack
