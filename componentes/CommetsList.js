import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { getCommments } from "../api/getComments";
import { CommentItem } from "./CommentItem";
import { HeaderComments } from "./HeaderComments";
import { Loader } from "./Loader";
import Snackbar from "react-native-snackbar";

export const CommentsList = ({postId, alertHandler}) => {
    const [commentsList, setCommentsLIst] = useState([]);
    const [errorGetComments, setErrorGetComments] = useState(false);
    const [loading, setLoading] = useState(false);

    const setComments = async(id, reload) => {
        try {
            if(reload) {
                alertHandler(id);
            }
            setLoading(true);
            const commentsById = await getCommments(id);
            setCommentsLIst(commentsById);
            setErrorGetComments(false);
            setLoading(false);
        } catch(error) {
            setLoading(false)
            setErrorGetComments(true);
        }
    }
    useEffect(() => {
        if (errorGetComments) {
            Snackbar.show({
                text: 'Error Loading Comments',
                duration: Snackbar.LENGTH_INDEFINITE,
                action: {
                  text: 'RELOAD',
                  textColor: '#0000FF',
                  onPress: () => setComments(postId, true)
                },
            });

            alertHandler(0);
        };
    }, [errorGetComments])

    useEffect(() => {
        setComments(postId, false);
    }, []);


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => alertHandler(0)} style={styles.closeBackground} />
            <View style={styles.content}>
            <HeaderComments alertHandler={alertHandler} />
            {!!loading ? (
                <Loader position={'Comments'} />
            ) : (
                <View style={styles.listContainer}>
                    <FlatList
                        data={commentsList}
                        renderItem = {({item}) => (
                            <CommentItem comment={item} />
                        )}
                    />
                </View>
            )}
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
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