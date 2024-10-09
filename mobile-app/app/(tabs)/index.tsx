import { View, StyleSheet } from 'react-native';
import { Wiggle } from '@/components/atoms/Wiggle';

export default function HomeScreen() {
  return (
      <View style={styles.strawberryContainer}>
        <Wiggle wiggler="🍓" />
      </View>
  );
}

const styles = StyleSheet.create({
  strawberryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});
