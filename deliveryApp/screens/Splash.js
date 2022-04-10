import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, StatusBar, Platform } from 'react-native';

import StatusBarTheme from '../src/componets/StatusBarTheme';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'



const Splash = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBarTheme />

            <Text>Splash</Text>
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

export default Splash;