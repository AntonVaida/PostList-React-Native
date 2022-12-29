import React from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dimensions } from "react-native";

export const PhotoItem = ({photo}) => {
    const Navigation = useNavigation();

    const openPhoto = () => {
        Navigation.navigate('DetailPhoto', {photo: photo})
    };

    const openIns = () => {
        const urlIst = `https://www.instagram.com/${photo.authorInst}/`;
        Linking.openURL(urlIst);
    };


    const getFullName = (Fname, Lname) => {
        let name = '';

        if(!Fname && !Lname) {
            return false;
        }

        if (Fname) {
            name += Fname
        }

        if (Lname) {
            name += Lname
        }

        return name;
    };

    const authorFullName = getFullName(photo.authorFirstName, photo.authorLastName);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openPhoto}>
                <View style={styles.imgSmallBlock}>
                    <Image
                        source={{uri: photo.imgSmall}}
                        style={styles.imgSmall}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    {photo.description}
                </Text>
            </View>
            <View style={styles.authorBlock}>
                {authorFullName && (
                    <Text style={styles.instName}>
                        {authorFullName}
                    </Text>
                )}
                {photo.authorInst && (
                    <TouchableOpacity onPress={openIns}>
                            <View style={styles.instBlock}>
                            <View style={styles.instLogo}>
                                <AntDesign name="instagram" size={15} color="#000000" />
                            </View>
                            <Text style={styles.instName}>
                                {photo.authorInst}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: '#ddd',
        borderWidth: 1,
        paddingVertical: 10,
    },
    imgSmall: {
        width: Dimensions.get('screen').width,
        height: '100%',
        resizeMode: 'cover',
    },
    imgSmallBlock: {
        paddingVertical: 10,
        height: 250,
    },
    descriptionText: {
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'Montserrat-Medium',
    },
    instLogo: {
        marginRight: 5,
    },
    instBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
    },
    authorBlock: {
        width: 350,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    instName: {
        fontFamily: 'Montserrat-Light'
    },
});