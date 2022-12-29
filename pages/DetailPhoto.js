import React from "react";
import { View, StyleSheet, Image} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Header } from "../componentes/Header";


export const DetailPhoto = () => {
    const props = useRoute();

    return (
        <View style={styles.container}>
            <Header headerPosition={'DetailPhoto'} />
            <Image
                source={{uri: props.params.photo.imgBig}}
                style={styles.photo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#6ED321'
    },
    photo: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    }
});