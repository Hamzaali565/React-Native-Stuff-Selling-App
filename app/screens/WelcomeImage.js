import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton';

const WelcomeImage = () => {
    return (
        <ImageBackground
            style={styles.background}
            blurRadius={10}
            source={require('../assets/welcome.jpeg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Text style={styles.tagline}>Sell What you Dont need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color='secondary' />
            </View>
        </ImageBackground>
    )
};
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: "100%"
    }
    ,
    tagline: {
        color: "white",
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }

})

export default WelcomeImage