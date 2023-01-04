import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export const LoginButton = ({handler, title, active}) => {

    if (!active) {
        return (
            <View style={styles.containerDisaple}>
                <Text style={styles.textButton}>{title}</Text>
            </View>
        )
    }
    return (
        <TouchableOpacity onPress={handler} >
            <View style={styles.container}>
                <Text style={styles.textButton}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = EStyleSheet.create({
    container: {
        height: 50,
        width: 200,
        backgroundColor: '$borderColor',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textButton: {
        fontSize: 25,
        fontFamily: 'Montserrat-Bold',
        color: '$textColor',
    },
    containerDisaple: {
        height: 50,
        width: 200,
        backgroundColor: '$borderColor',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        opacity: 0.5,
    },
});