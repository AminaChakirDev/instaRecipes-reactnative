import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import recipes from '../recipes';
import RecipeAtHome from './RecipeAtHome';

export default function Home({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Recettes à la une</Text>
            <FlatList
                data={recipes}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => 
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => {
                            navigation.navigate('Recipe', {
                                recipe:{item},
                            });
                        }}
                    >
                        <RecipeAtHome recipe={item}/>
                    </TouchableHighlight>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff'
    },
    title: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2C001B',
        fontFamily: 'Helvetica Neue',
    },
});
