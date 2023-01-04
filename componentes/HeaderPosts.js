import React from "react";
import { View, Text } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";


export const HeaderPosts = () => {
    const Navigation = useNavigation();

    const toLogIN = () => {
        Navigation.navigate('Login')
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={toLogIN} style={styles.arrowBack}>
                <AntDesign name="logout" size={24} color="#fff" />
            </TouchableOpacity>
            <View>
                <Text style={styles.sectionText}>
                    Posts
                </Text>
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 4,
        width: '100%',
        height: 40,
        backgroundColor: '$borderColor',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: '$textColor',
    },
    arrowBack: {
        position: 'absolute',
        zIndex: 6,
        top: '50%',
        right: '5%',
        transform: [{translateY: -12}],
    },
});