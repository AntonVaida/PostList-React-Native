import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export const RenderLoader = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size={'large'} color={'#aaa'} />
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        marginVertical: 15,
        alignItems: 'center',
    }
});