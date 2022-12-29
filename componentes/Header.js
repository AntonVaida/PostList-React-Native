import React from "react";
import { View, Text,  StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


export const Header = ({headerPosition}) => {
    const Navigation = useNavigation();

    const toGallery = () => {
        Navigation.navigate('Gallery')
    };

    return (
        <View style={styles.header}>
            {(headerPosition === "DetailPhoto") && (
                <TouchableOpacity onPress={toGallery} style={styles.arrowBack}>
                    <View>
                        <AntDesign name="left" size={30} color="#fff" />
                    </View>
                </TouchableOpacity>
            )}
            <View>
                <Text style={styles.sectionText}>
                    {headerPosition}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 3,
        width: '100%',
        height: 40,
        backgroundColor: '#6ED321',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: '#fff',
    },
    arrowBack: {
        position: 'absolute',
        zIndex: 4,
        top: '50%',
        left: '5%',
        transform: [{translateY: -15}],
    }
});