import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function SearchResults() {
    return (
        <View style={styles.mainContainer}>
            
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