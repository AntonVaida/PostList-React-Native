import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { HeaderPosts } from "../componentes/HeaderPosts";
import { getPosts } from "../api/getPosts";
import { PostItem } from "../componentes/PostItem";
import { useRoute } from "@react-navigation/native";
import { CommentsList } from "../componentes/CommetsList";
import { Loader } from "../componentes/Loader";
import Snackbar from "react-native-snackbar";

export const Posts = () => {
    const [postList, setPostList] = useState([]);
    const [loding, setLoading] = useState(false);
    const [selectPost, setSelectPost] = useState(0);
    const [errorLoading, setErrorLoading] = useState(false);
    const props = useRoute();
    console.log(props.params.userId)

    const setListPosts = async(id) => {
        try {
            setLoading(true);
            const listPosts = await getPosts(id);
            setPostList(listPosts);
            setErrorLoading(false);
            setLoading(false);
        } catch(error) {
            setLoading(false);
            setErrorLoading(true)
            console.log(error);
        }
    }
    useEffect(() => {
        if(errorLoading) {
            Snackbar.show({
                text: 'Error Loading Posts',
                duration: Snackbar.LENGTH_INDEFINITE,
                action: {
                  text: 'RELOAD',
                  textColor: '#0000FF',
                  onPress: () => setListPosts(Number(props.params.userId)),
                },
            });
        }
    }, [errorLoading])

    useEffect(() => {
        setListPosts(Number(props.params.userId));
    }, []);

    const openComments = (id) => {
        setSelectPost(id);
        console.log(id);
    }

    const closeComments = () => {
        setSelectPost(0);
    }

    return (
        <View style={styles.container}>
            <HeaderPosts />
            {!!selectPost && (
                <CommentsList postId={selectPost} closeHandler={closeComments} />
            )}
            {!!loding ? (
                <Loader position={'Posts'} />
            ) : (
                <View style={styles.listContainer}>
                    <FlatList
                        data={postList}
                        renderItem={({item}) => (
                            <PostItem post={item} handlerComments={openComments} />
                        )}
                    />
                </View>
            )}
        </View>
    )
}

const styles = EStyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '$backgroundColor',
    },
    listContainer: {
        paddingTop: 40,
    },
})