import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  measure,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

interface RippleProps {
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
  onTap?: () => void
}

const Ripple: React.FC<RippleProps> = ({ style, onTap, children }) => {
  const centerX = useSharedValue(0)
  const centerY = useSharedValue(0)
  const scale = useSharedValue(0)

  const aRef = useAnimatedRef<View>()
  const width = useSharedValue(0)
  const height = useSharedValue(0)

  const rippleOpacity = useSharedValue(1)

  const tapGestureEvent =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart: (tapEvent) => {
        const layout = measure(aRef)
        width.value = layout.width
        height.value = layout.height

        centerX.value = tapEvent.x
        centerY.value = tapEvent.y

        rippleOpacity.value = 1
        scale.value = 0
        scale.value = withTiming(1, { duration: 300 })
      },
      onActive: () => {
        if (onTap) {
          runOnJS(onTap)()
        }
      },
      onFinish: () => {
        rippleOpacity.value = withTiming(0)
      },
    })

  const rStyle = useAnimatedStyle(() => {
    const circleRadius = 400

    const translateX = centerX.value - circleRadius
    const translateY = centerY.value - circleRadius

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius,
      opacity: rippleOpacity.value,
      backgroundColor: 'rgba(0,0,0,0.2)',
      position: 'absolute',
      top: 0,
      left: 0,
      transform: [
        { translateX },
        { translateY },
        {
          scale: scale.value,
        },
      ],
    }
  })

  return (
    <View ref={aRef} style={style}>
      <TapGestureHandler onGestureEvent={tapGestureEvent}>
        <Animated.View style={[styles.width100, styles.overflowHidden]}>
          <View style={style}>{children}</View>
          <Animated.View style={rStyle} />
        </Animated.View>
      </TapGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden',
  },
  width100: {
    width: '100%',
  },
})

export default Ripple
