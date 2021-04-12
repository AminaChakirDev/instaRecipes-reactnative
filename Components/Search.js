import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';

export default function Search() {

const [instaAuthorValue, setInstaAuthorValue] = useState('')
const [recipeNameValue, setRecipeNameValue] = useState('')
const [recipeTypeValue, setRecipeTypeValue] = useState('')
const [themeValue, setThemeValue] = useState('')
const [ingredient, setIngredient] = useState('')
const [machineValue, setMachineValue] = useState('')

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>
                Tu recherches une recette{"\n"}en particulier ?
            </Text>
            <TextInput
                value={instaAuthorValue}
                style={styles.input}
                placeholder="@Instagrammeur.euse"
                returnKeyType="done"
                clearButtonMode="while-editing"
            />
            <TextInput
                value={recipeNameValue}
                style={styles.input}
                placeholder="Nom de la recette"
                returnKeyType="done"
                clearButtonMode="while-editing"
            />
            <Text style={styles.title}>
                Pas d'inspiration ?{"\n"}Trouve ta recette ici
            </Text>

            <TextInput
                value={recipeTypeValue}
                style={styles.input}
                placeholder="Type de plat"
                returnKeyType="done"
                clearButtonMode="while-editing"
            />
            <TextInput
                value={themeValue}
                style={styles.input}
                placeholder="Thème"
                returnKeyType="done"
                clearButtonMode="while-editing"
            />
            <TextInput
                value={ingredient}
                style={styles.input}
                placeholder="Ingrédients"
                returnKeyType="done"
                clearButtonMode="while-editing"
            />
            <TextInput
                value={machineValue}
                style={styles.input}
                placeholder="Appareils"
                returnKeyType="done"
                clearButtonMode="while-editing"
            />
            <TouchableHighlight
                onPress={() => {}}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>RECHERCHER</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: '#2C001B',
        fontFamily: 'Helvetica Neue',
        marginTop: 30,
        marginBottom: 20,
    },
    input: {
        height: 40,
        marginTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        width: 300,
        borderWidth: 1,
        fontFamily: 'Helvetica Neue',
        borderRadius: 4,
        borderColor: '#E5E5E5',
        fontSize: 18,
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#ff3453",
        paddingRight: 20,
        paddingLeft: 20,
        width: 300,
        marginTop: 20,
        borderRadius: 20,
        height: 45,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});