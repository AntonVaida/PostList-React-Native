import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Error = ({closeHandler}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={closeHandler} style={styles.closeIcon}>
                <AntDesign name="close" size={18} color="#fff" />
            </TouchableOpacity>
            <View style={styles.textBlock}>
                <Text style={styles.text}>
                    Error internet connection...
                </Text>
            </View>
            <View>
                <AntDesign name="disconnect" size={30} color="#fff"/>
            </View>
        </View>
    )
};

const styles = EStyleSheet.create({
    container: {
        height: 80,
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$backgroundColorAlert',
        position: 'absolute',
        borderColor: '$borderColor',
        borderWidth: 2,
        top: '10%',
        left: '10%',
        zIndex: 2,
    },
    textBlock: {
        paddingRight: 15,
    },
    text: {
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
        color: '$textColor',
    },
    closeIcon: {
        position: 'absolute',
        zIndex: 6,
        top: '5%',
        right: '2%',
    },
});