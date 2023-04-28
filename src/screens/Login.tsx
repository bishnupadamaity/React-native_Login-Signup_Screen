/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Login() {
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <View style={{ alignItems: 'center', flex: 1 }}>
                <Image
                    source={require('../images/login.png')}
                    style={styles.loginImage} />
                <View style={styles.loginDetail}>
                    <Text style={styles.loginText}>Login</Text>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Email ID"
                            keyboardType={'email-address'}
                        />
                        <TextInput
                            style={styles.inputField}
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                        <Text style={{ color: '#000000' }}>Forgot Password?</Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#1B98F5',
                                borderRadius: 100,
                                alignItems: 'center',
                                width: 315,
                                paddingVertical: 10,
                                marginVertical: 10,
                            }}>
                            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ color: '#000' }}>Don't have an account? </Text>
                            <Text style={{ color: '#1B98F5', fontWeight: 'bold' }}>Register</Text>
                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loginImage: {
        height: 300,
        width: 400,
        resizeMode: 'contain',
    },
    loginDetail: {
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        height: 380,
        width: 410,
        marginTop: -20,
        backgroundColor: '#ffffff',
        elevation: 20,
    },
    loginText: {
        fontSize: 40,
        color: '#1B98F5',
        fontWeight: 'bold',
        marginLeft: 35,
    },
    inputField: {
        borderRadius: 100,
        paddingHorizontal: 10,
        width: '78%',
        backgroundColor: '#6C7A89',
        marginVertical: 10,
        color: '#ffffff',
    },
});
