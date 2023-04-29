/* eslint-disable prettier/prettier */
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
export default function SignUp() {
  return (
    <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <View style={{ alignItems: 'center', flex: 1 }}>
                <Image
                    source={require('../images/signup.png')}
                    style={styles.loginImage} />
                <View style={styles.loginDetail}>
                    <Text style={styles.loginText}>Sign up</Text>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Email ID"
                            keyboardType={'email-address'}
                        />
                        <TextInput
                            style={styles.inputField}
                            placeholder="Full Name"
                        />
                        <TextInput
                            style={styles.inputField}
                            placeholder="Mobile"
                        />
                        <TextInput
                            style={styles.inputField}
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                        <Text style={{ color: '#000000',width:'80%',alignItems:'center',fontWeight:'400',marginLeft:30,marginVertical:2 }}>By Signing up, you are agreed to our Terms and conditions and Privacy Policy.</Text>
                        <TouchableOpacity
                            style={styles.signupBtn}>
                            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>
                                Continue
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ color: '#000' }}>Joined us before? </Text>
                            <Text style={{ color: '#1B98F5', fontWeight: 'bold' }}>Login</Text>
                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    loginImage: {
        height: 200,
        width: 400,
        marginBottom:15,
        resizeMode: 'contain',
    },loginDetail: {
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        height: 500,
        width: 410,
        marginTop: -20,
        backgroundColor: '#ffffff',
        elevation: 40,
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
    signupBtn:{
        backgroundColor: '#1B98F5',
        borderRadius: 100,
        alignItems: 'center',
        width: 315,
        paddingVertical: 10,
        marginVertical: 5,
    }
    
});
