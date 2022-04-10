import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, StatusBar, Platform } from 'react-native';

import StatusBarTheme from '../src/componets/StatusBarTheme';
import { icons, images, SIZES, COLORS, FONTS } from '../constants';




const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBarTheme />
            <KeyboardAvoidingView style={{ width: '100%', marginTop: -110, justifyContent: 'flex-start', alignItems: 'center' }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={{ width: SIZES.width, height: SIZES.height, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 200, height: 200, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.logo} source={images.logo} />
                    </View>


                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    logo: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
})

export default Login;