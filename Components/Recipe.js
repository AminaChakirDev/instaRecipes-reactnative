import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Recipe({ route }) {

    const { recipe } = route.params;

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>
                {recipe.item.title}
            </Text>
            <WebView
                originWhitelist={['*']}
                source={{ html: `<iframe src=${recipe.item.instaLink} width="970" height="1075" frameborder="0" scrolling="no" allowtransparency="true"></iframe>` }}
                style={{ marginTop: 20 }}
            />
            <ScrollView>
                <Text>Ingrédients</Text>
                <Text>flatlist liste ingrédient</Text>
                <Text>Préparation</Text>
                <Text>Fouetter la farine, les sucres, le sel, la vanille et le lait et l’eau. Ajouter l’huile et les oeufs sans cesser de fouetter jusqu’à ne plus avoir de grumeaux.</Text>
                <Text>Cuisson</Text>
                <Text>Chauffer une poêle et commencer la cuisson .</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontWeight: 'bold',
        color: '#2C001B',
        fontFamily: 'Helvetica Neue',
    }
});