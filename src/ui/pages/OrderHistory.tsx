/* eslint-disable react-native/no-inline-styles */
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ErrorButton from '../components/ErrorButton'
import Header from '../components/Header'
import BackIcon from '../components/icons/BackIcon'
import HeaderTitle from '../components/HeaderTitle'

const ScreenHighet = Dimensions.get('window').height
export default function HistoryPage({ itemList }: { itemList: any[] }) {
  if (itemList.length === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header
          leftComponent={<BackIcon />}
          middleComponent={<HeaderTitle title="order history" />}
        />
        <View style={styles.container}>
          <Image source={require('../images/Saly-11.png')} />
        </View>
        <Text style={styles.largeTextStyle}>No history yet</Text>

        <Text style={styles.smallText}>
          Hit the orange button down below to Create an order
        </Text>
        <View
          style={{
            marginTop: '10%',
          }}
        >
          <ErrorButton
            onPress={() => {}}
            height={ScreenHighet * 0.06}
            text={'Start ordering'}
            width={'53%'}
          />
        </View>
      </View>
    )
  } else {
    throw new Error('SplashScreen not implemented yet')
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: '5%',
  },
  largeTextStyle: {
    fontFamily: 'Raleway',
    fontWeight: '600',
    fontSize: 28,
    alignSelf: 'center',
    lineHeight: 32.87,
    color: '#000000',
    marginBottom: 17,
  },
  smallText: {
    fontFamily: 'Raleway',
    fontWeight: '400',
    fontSize: 17,
    alignSelf: 'center',
    width: '57.5%',
    color: '#000000',
    opacity: 0.57,
    lineHeight: 23.8,
    textAlign: 'center',
  },
  buttonContainer: {},
})
