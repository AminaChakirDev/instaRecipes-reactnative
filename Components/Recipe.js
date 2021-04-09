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
                style={{ marginTop: 10 }}
            />
            <ScrollView>
                <Text style={styles.subTitle}>Ingrédients</Text>
                <Text style={styles.content}>flatlist liste ingrédient</Text>
                <Text style={styles.subTitle}>Préparation</Text>
                <Text style={styles.content}>Fouetter la farine, les sucres, le sel, la vanille et le lait et l’eau. Ajouter l’huile et les oeufs sans cesser de fouetter jusqu’à ne plus avoir de grumeaux.</Text>
                <Text style={styles.subTitle}>Cuisson</Text>
                <Text style={styles.content}>Chauffer une poêle et commencer la cuisson.</Text>
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
        fontSize: 20,
        marginTop: 30
    },
    subTitle: {
        color: '#2C001B',
        fontFamily: 'Helvetica Neue',
        fontSize: 20,
        marginTop: 20
    },
    content: {
        color: '#2C001B',
        fontFamily: 'Helvetica Neue',
        fontSize: 20,
    },
});