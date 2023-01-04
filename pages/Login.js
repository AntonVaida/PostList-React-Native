import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import users from '../api/users.json'
import { Formik } from "formik";
import * as Yup from 'yup';
import EStyleSheet from "react-native-extended-stylesheet";
import { LoginButton } from "../componentes/LoginButton";


export const Login = () => {
    const [error, setError] = useState('');
    const Navigation = useNavigation();

    const submitHandler = (value) => {
        const selectUser = users.find(user => user.userEmail === value.email);
        if (!selectUser || !selectUser.password === value.password) {
            setError('your email or password is not correct');
            setTimeout(() => setError(''), 3000);
        } else {
            setError('');
            Navigation.navigate('Posts', {userId: selectUser.userId})
        }
    }


    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
      });


    return (
        <Formik
        initialValues={{ 
            email: '',
            password: '',
        }}
        onSubmit={values => submitHandler(values)}
        validationSchema={SignupSchema}
        >
            {({ 
                handleChange, 
                handleBlur, 
                handleSubmit, 
                values, 
                errors 
            }) => (
                <View style={styles.conatainer}>
                    <View style={styles.loginBlock}>
                        <Text style={styles.pageTitle}>
                            Login
                        </Text>
                        <View style={styles.formContainer}>
                            <TextInput 
                                placeholder="email" 
                                value={values.email} 
                                onChangeText={handleChange('email')} 
                                autoCapitalize='none'
                                onBlur={handleBlur('email')}
                                style={styles.input}
                            />
                            <View style={styles.errorBlock}>
                                <Text style={styles.error}>{errors.email}</Text>
                            </View>
                            <TextInput 
                                placeholder="password" 
                                value={values.password} 
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                autoCapitalize='none' 
                                secureTextEntry
                                style={styles.input}
                            />
                            <View style={styles.errorBlock}>
                                <Text style={styles.error}>{errors.password}</Text>
                            </View>
                        </View>
                        <View style={styles.errorBlock}>
                            <Text style={styles.error}>{error}</Text>
                        </View>
                        <View>
                            {(errors.email || errors.password) ? (
                                <LoginButton title={'Login'} handler={handleSubmit} active={false} />
                            ) : (
                                <LoginButton title={'Login'} handler={handleSubmit} active={true} />
                            )}
                        </View>
                    </View>
                </View>
            )}
        </Formik>
    )
}

const styles = EStyleSheet.create({
    conatainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$backgroundColor',
    },
    loginBlock: {
        height: 350,
        width: '80%',
        backgroundColor: '$backgroundColorAlert',
        borderRadius: 20,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: '$borderColor',
        borderWidth: 2,
    },

    pageTitle: {
        fontSize: 30,
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        textAlign: 'center',

    },
    input: {
        backgroundColor: '$textColor',
        borderRadius: 10,
        fontSize: 15,
        lineHeight: 15,
        fontFamily: 'Montserrat-Medium',
    },
    formContainer: {
        paddingTop: '10%',
        width: '80%',
    },
    errorBlock: {
        height: 30,
        paddingVertical: 5,
    },
    error: {
        textAlign: 'center',
        fontSize: 15,
        lineHeight: 15,
        fontFamily: 'Montserrat-Medium',
        color: 'red',
    },
    loginButton: {
        
        width: 250,
    },
})