import React from "react";
import { ActivityIndicator, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export const Loader = ({position}) => {
    const paddingTop = (position === 'Posts') ? (40) : (30);

    return (
        <View style={{...styles.loader, paddingTop}}>
            <ActivityIndicator size={'large'} color={'#0000FF'} />
        </View>
    )
}

const styles = EStyleSheet.create({
    loader: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$backgroundColor',
    }
});