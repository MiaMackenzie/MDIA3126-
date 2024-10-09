import { Text, View } from 'react-native';
import Input from '@/components/atoms/Input';
import HoverLink from '@/components/atoms/HoverLink';

export default function InputForm({ labelText, placeholderText, buttonText }) {

    return (
        <View className="mb-4">
            <Text className="mb-2">{labelText}</Text>
            <View className="flex flex-row">
                <Input
                    placeholderText={placeholderText}
                />
                <HoverLink 
                    href="#"
                    text={buttonText}
                    colors={['#B4C424', '#8A9A5B', '#808000']}
                />
            </View>
        </View>
    )
}