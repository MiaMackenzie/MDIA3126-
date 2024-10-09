import { Text, ScrollView, View, StyleSheet } from 'react-native';

import InputForm from '@/components/molecules/InputForm';


export default function Page() {
    return (
    <ScrollView style={makeItPretty.saladPage}>
            <Text className="mb-8 text-2xl underline decoration-red-500 hover:italic" style={makeItPretty.pageTitle}>Ceasar Salad from Best of Bridge (1980)</Text>
            
            <InputForm 
                labelText="Let me know what you think of the recipe!"
                placeholderText="Yum, it looks tasty!"
               buttonText="Submit"
            />

            <Text className="mb-2">
                🥬 This is a really "professional" tasting Caesar because you must do everything from scratch. With the exception of the final mixing, this can be done ahead of time. Use Brownberry Oven croutons, they are the best around. 🥬
            </Text>

            <View style={makeItPretty.section}>
                <Text style={makeItPretty.heading}>Ingredients</Text>
                <Text>1 romaine lettuce</Text>
                <Text>2 cloves garlic</Text>
                <Text>6 tbsp. olive oil</Text>
                <Text>¾ tsp. salt</Text>
                <Text>¼ tsp. black pepper</Text>
                <Text>¼ tsp. dry mustard</Text>
                <Text>1½ tsp. worcestershire sauce</Text>
                <Text>1 tsp. anchovy paste OR 3 chopped anchovies</Text>
                <Text>1 egg</Text>
                <Text>2 tbsp. grated parmesan</Text>
                <Text>2 tbsp. lemon juice</Text>
            </View>

            <View style={makeItPretty.section}>
            <Text style={makeItPretty.heading}>Method</Text>
            <Text>Prepare romaine lettuce by washing and drying thoroughly. Be sure to discard any wilted or discoloured leaves.</Text>
            <Text>Set aside ½ a clove of garlic, mince the remaining peices if not using a blender.</Text>
            <Text>Mix oil, remaining garlic, salt, pepper, mustard, worcester, and anchovies in a blender or vigorously by hand.</Text>
            <Text>In a small saucepan, bring 2" of water to boiling. Turn off the heat and carefully lower egg into water. Let stand 1 minute, then lift out and set aside to cool.</Text>
            <Text>Just before serving, rub the inside of the salad bowl with the half garlic clove set aside earlier. Tear romaine in bite size peices into salad bowl.</Text>
            <Text>Shake dressing and pour over lettuce. Sprinkle lettuce with parmesan. Toss until all leaves are coted with dressing. Break egg over centre of salad (I only use the yolk). Pour lemon juice directly over egg; toss well.</Text>
            <Text>Sprinkle with croutons and toss quickly again. Serve at once.</Text>
            </View>
       </ScrollView>
  )
}

const makeItPretty = StyleSheet.create({
    saladPage: {
        fontFamily: 'SwankyandMooMoo',
        fontVariantCaps: 'all-small-caps',
        fontSize: 20,
        margin: 20,
    },
    pageTitle: {
        fontFamily: 'SwankyandMooMoo',
        fontVariantCaps: 'all-small-caps',
        borderColor: 'blue',
        borderWidth: 1,
    },
    section: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'red',
        borderRadius: 8,
        padding: 12,
        position: 'relative',
        marginBottom: 20
    },
    heading: {
        position: 'absolute',
        transform: 'translateX(-15px)',
        left: '50%',
        top: -15,
        backgroundColor: 'rgb(242, 242, 242)',
        paddingLeft: 10,
        paddingRight: 10
    }
  });

