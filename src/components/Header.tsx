import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";


import userImg from '../assets/profile.png'
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {

    const image = "https://avatars.githubusercontent.com/u/54243778?v=4"
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Nicolas</Text>
            </View>

            <Image source={userImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        // marginTop: 
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
})

