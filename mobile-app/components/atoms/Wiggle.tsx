import { StyleSheet, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

export function Wiggle({ wiggler }) {
  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(withTiming(25, { duration: 250 }), withTiming(0, { duration: 250 })),
    0 // run it foreverrrrrr
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Text style={styles.text}>{wiggler}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 150,
  },
});
