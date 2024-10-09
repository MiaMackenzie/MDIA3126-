import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Wiggle } from '@/components/atoms/Wiggle';
import HoverLink from '@/components/atoms/HoverLink';

export default function Page() {

  return (
    <View className="items-center">
      <Wiggle wiggler="🐭" />

        <Text className="mb-16 text-2xl decoration-wavy underline decoration-orange-500 hover:decoration-yellow-300 hover:italic hover:after:content-['🧀']">This is a page about cheese.</Text>
        <Link className="bg-white mb-8 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]" href="/"><Text>Go to index page</Text></Link>
        <HoverLink href="/caesar-salad"
          text="How to make the best caesar salad!"
        />
    </View>
  )
}


