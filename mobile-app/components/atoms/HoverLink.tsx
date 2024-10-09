import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HoverLink({href, text}) {
    // tailwind doesn't support dynamic classes, boo 👻
    // const shadowColors = colors;
    // const [colorOne, colorTwo, colorThree] = shadowColors;
    // const shadowClassName = `absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_${colorOne},10px_10px_${colorTwo},15px_15px_${colorThree}] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none`;
    const shadowClassName = `absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#B4C424,10px_10px_#8A9A5B,15px_15px_#808000] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none`;

    return (
        <View className="group relative">
            <Link className="bg-white relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0" href={href}>
                <Text>{text}</Text>
            </Link>
            <View className={shadowClassName}></View>
        </View>
    )
}
