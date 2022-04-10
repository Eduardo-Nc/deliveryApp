import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, StatusBar, Platform } from 'react-native';

import { icons, images, SIZES, COLORS, FONTS } from '../../constants'



const StatusBarTheme = () => {
    let colorStatusBar = null;


    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            var r = parseInt(result[1], 16);
            var g = parseInt(result[2], 16);
            var b = parseInt(result[3], 16);
            return "rgba(" + r + "," + g + "," + b + ",0.7)";
        }
        return null;
    }
    colorStatusBar = hexToRgb(COLORS.primary)

    return (
        <View>
            <StatusBar backgroundColor={colorStatusBar} barStyle='light-content' />
        </View>
    )
}




const styles = StyleSheet.create({

})

export default StatusBarTheme;