import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { HeaderPosts } from "../componentes/HeaderPosts";
import { getPosts } from "../api/getPosts";
import { PostItem } from "../componentes/PostItem";
import { useRoute } from "@react-navigation/native";
import { CommentsList } from "../componentes/CommetsList";
import { Loader } from "../componentes/Loader";
import Snackbar from "react-native-snackbar";
import { Error } from "../componentes/Error";
import { Dirs, FileSystem } from "react-native-file-access";
import { checkConnection } from "../utils/checkConnection";

export const Posts = () => {
    const [postList, setPostList] = useState([]);
    const [loding, setLoading] = useState(false);
    const [selectPost, setSelectPost] = useState(0);
    const [errorLoading, setErrorLoading] = useState(false);
    const [internetConnection, setInternetConnection] = useState(false);
    const props = useRoute();

    const setLocsleData = async() => {
        const postsData = await FileSystem.readFile(Dirs.DocumentDir + '/posts.json');
        console.log(postsData);
        const posts = JSON.parse(postsData);
        setPostList(posts);
    }

    const setListPosts = async(id) => {
        try {
            setLoading(true);
            const listPosts = await getPosts(id);
            setPostList(listPosts);
            setErrorLoading(false);
            await FileSystem.unlink(Dirs.DocumentDir + '/posts.json')
            await FileSystem.appendFile(Dirs.DocumentDir + '/posts.json', JSON.stringify(listPosts), 'utf8')
            setLoading(false);
        } catch(error) {
            setLoading(false);
            setErrorLoading(true)
            console.log(error);
        }
    }

    useEffect(() => {
        if (!internetConnection) {
            setLocsleData()
            console.log('LOCALE NOT FOUND')
        }
    }, [internetConnection])

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
        checkConnection(setInternetConnection);
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
            {!internetConnection && (
                <Error />
            )}
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