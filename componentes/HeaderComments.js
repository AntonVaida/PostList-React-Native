import React from "react";
import { View, Text } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";


export const HeaderComments = ({closeHandler}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={closeHandler} style={styles.arrowBack}>
                <AntDesign name="close" size={18} color="#fff" />
            </TouchableOpacity>
            <View>
                <Text style={styles.sectionText}>
                    Comments
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
        height: 30,
        backgroundColor: '$borderColor',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: '$textColor',
    },
    arrowBack: {
        position: 'absolute',
        zIndex: 6,
        top: '50%',
        right: '5%',
        transform: [{translateY: -9}],
    },
});