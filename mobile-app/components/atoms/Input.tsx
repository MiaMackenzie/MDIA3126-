import { TextInput } from 'react-native';

export default function Input({ placeholderText, inputMode }) {
    return (
        <TextInput 
            className="flex-1 h-12 overflow-hidden rounded-md border border-neutral-200 bg-white px-6 text-neutral-950"
            placeholder={placeholderText}
            placeholderTextColor="rgb(118, 118, 118)"
            inputMode={inputMode}
        />
    )
}


