import React from "react";
import { View, Text, TouchableOpacity, Linking} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export const CommentItem = ({comment}) => {

    const openAuthorEmail = () => {
        const urlIst = comment.email;
        Linking.openURL(urlIst);
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity onPress={openAuthorEmail}>
                    <View style={styles.authorBlock}>
                        <Text style={styles.authorText}>author:</Text>
                        <Text style={styles.authorText}>{comment.email}</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>{comment.name}</Text>
                    <Text style={styles.body}>{comment.body}</Text>
                </View>
            </View>
        </View>
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
        // height: 250,
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
        paddingBottom: 20,
    },
    body: {
        fontSize: 15,
        lineHeight: 15,
        fontFamily: 'Montserrat-Medium',
        color: '$textColorBlack',
    },
    authorBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 20,
    },
    authorText: {
        fontSize: 15,
        lineHeight: 15,
        fontFamily: 'Montserrat-Medium',
        color: '$textColorBlack',
    },
})