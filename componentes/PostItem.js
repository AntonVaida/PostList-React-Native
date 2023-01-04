import React from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export const PostItem = ({post, handlerComments}) => {

    return (
        <TouchableOpacity onPress={() => handlerComments(post.id)} style={styles.container} >
            <View style={styles.content}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.body}>{post.body}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = EStyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '$backgroundColor',
        borderTopColor: '$borderColor',
        borderBottomColor: '$borderColor',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 30,
    },
    title: {
        fontSize: 20,
        lineHeight: 20,
        fontFamily: 'Montserrat-Bold',
        color: '$textColorBlack',
        textAlign: 'center',
        paddingBottom: 30,
    },
    body: {
        fontSize: 15,
        lineHeight: 15,
        fontFamily: 'Montserrat-Medium',
        color: '$textColorBlack',
    },
})