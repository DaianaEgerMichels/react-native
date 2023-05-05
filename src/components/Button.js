import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import Texto from "./Texto";

export default function Button({ texto, onPress, style }){
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <Texto style={styles.textButton}>
                    {texto}
                </Texto>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textButton: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})