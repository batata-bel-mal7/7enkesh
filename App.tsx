import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider, useSelector } from 'react-redux'
import { store } from './src/redux/store'
import { StyleSheet } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import MainStack from './src/navigation/MainStack'
import { useAppDispatch } from './src/hooks/useAppDispatch'
import {
  initNetInfo,
  selectNetworkInfo,
  setNetworkInfo,
} from './src/redux/networkInfo/networkInfoSlice'
import { selectUser, initUser } from './src/redux/user/userSlice'
import auth from '@react-native-firebase/auth'
// import products from './src/services/products'

const App = () => {
  const appDispatch = useAppDispatch()
  const netinfo = useSelector(selectNetworkInfo)
  const user = useSelector(selectUser)
  // const [netInfoInit, setNetInfoInit] = useState(true)
  const [userInit, setUserInit] = useState(true)

  useEffect(() => {
    // ;(async () => {
    //   const m = await products.searchProductsByName('samsung')
    //   for (let i = 0; i < m.length; i++) {
    //     console.log(m[i])
    //     console.log('******************')
    //   }
    // })()
    appDispatch(initNetInfo())
    const netInfoEventListener = NetInfo.addEventListener((state) => {
      appDispatch(setNetworkInfo(state))
    })
    appDispatch(initUser())
    const authListener = auth().onAuthStateChanged(() => {
      if (userInit) {
        setUserInit(false)
        return
      }
      appDispatch(initUser())
    })
    return () => {
      netInfoEventListener()
      authListener()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!netinfo.initialized || !user.initialized) {
    return null
  }
  return <MainStack netinfo={netinfo} user={user} />
}

const Main = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={StyleSheet.absoluteFill}>
          <NavigationContainer>
            <App />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  )
}

export default Main
