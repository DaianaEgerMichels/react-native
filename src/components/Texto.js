import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) { 
    let styleNew = styles.normal;
    if (style?.fontWeight === "bold") {
        styleNew = styles.bold;
    }
    return (
        <Text style={[style, styleNew]}>{ children }</Text>
    )
}

const styles = StyleSheet.create({
    normal: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal" 
    },
    bold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
});