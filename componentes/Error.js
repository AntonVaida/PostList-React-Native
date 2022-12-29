import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Error = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textBlock}>
                <Text style={styles.text}>
                    Something went wrong
                </Text>
            </View>
            <View>
                <AntDesign name="disconnect" size={30} color="#fff"/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 250,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#6ED321',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{translateX: -125}, {translateY: -40}],
        zIndex: 5,
    },
    textBlock: {
        paddingRight: 15,
    },
    text: {
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
    }
});