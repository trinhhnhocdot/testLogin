import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const Button = ({ title,disabled,Buttoncolor, onPress = () => { } }) => {

    const windowWith = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <TouchableOpacity style={{
            height: 50, width: windowWith - 60,
            justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginTop: 20
            , backgroundColor: Buttoncolor
        }}
        disabled={disabled}
    >
        
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({})