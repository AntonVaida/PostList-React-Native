import React from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export const ConnetionError = () => {
    return (
        <View style={styles.container}>
            <Text>Internet Connection Error</Text>
        </View>
    )
}

const styles = EStyleSheet.create({
    container: {
        height: 80,
        width: 250,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})