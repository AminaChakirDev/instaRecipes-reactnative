import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function RecipeAtHome({ recipe }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.pictureContainer}>
                <Image
                    style={styles.picture}
                    source={recipe.picture}
                />
            </View>
            <Text style={styles.title}>
                {recipe.title}
            </Text>
            <View style={styles.detailsContainer}>
                <View>
                    <View style={styles.details}>
                        <AntDesign name="instagram" size={14} color="#2C001B" />
                        <Text style={styles.text}>
                            {recipe.instagramAuthor}
                        </Text>
                    </View>
                    <View style={styles.details}>
                        <MaterialCommunityIcons name="silverware-fork-knife" size={14} color="#2C001B" />
                        <Text style={styles.text}>
                            {recipe.type}
                        </Text>
                    </View>
                    <View style={styles.details}>
                        <Ionicons name="timer-outline" size={14} color="#2C001B" />
                        <Text style={styles.text}>
                            {recipe.timer}
                        </Text>
                    </View>
            </View>
            <View>
                <MaterialIcons name="favorite-border" size={24} color="black" />
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 15,
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
    },
    text: {
        fontFamily: 'Helvetica Neue',
        paddingLeft: 4,
    },
    title: {
        fontWeight: 'bold',
        color: '#2C001B',
        fontFamily: 'Helvetica Neue',
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    details: {
        flexDirection: 'row',
        paddingTop: 6,
        color: '#2C001B',
    },
    pictureContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    picture: {
        height: 200,
        width: 350,
        borderRadius: 4
    }
});