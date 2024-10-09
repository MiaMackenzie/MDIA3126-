import { Text, StyleSheet } from 'react-native';


export function TabBarIcon({ emoji, focused }) {
  return <Text style={[focused ? '': styles.inactive]}>{ emoji }</Text>
}

const styles = StyleSheet.create({
  inactive: {
    filter: 'grayscale(100%)'
  },
});
