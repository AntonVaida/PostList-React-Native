import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { getCommments } from "../api/getComments";
import { CommentItem } from "./CommentItem";
import { HeaderComments } from "./HeaderComments";

export const CommentsList = ({postId, closeHandler}) => {
    const [commentsList, setCommentsLIst] = useState([]);

    const setComments = async(id) => {
        const commentsById = await getCommments(id);
        setCommentsLIst(commentsById);
    }

    useEffect(() => {
        setComments(postId);
    }, []);


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={closeHandler} style={styles.closeBackground} />
            <View style={styles.content}>
            <HeaderComments closeHandler={closeHandler} />
                <View style={styles.listContainer}>
                    <FlatList
                        data={commentsList}
                        renderItem = {({item}) => (
                            <CommentItem comment={item} />
                        )}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeBackground: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 3,
    },
    content: {
        height: '50%',
        width: '100%',
        position: 'relative',
        zIndex: 15,
        backgroundColor: '$backgroundColor',
    },
    listContainer: {
        paddingTop: 30,
    },
})