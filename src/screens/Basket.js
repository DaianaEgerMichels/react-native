import React from "react";
import { StyleSheet, Image, Dimensions, Text } from "react-native";

import topo from "../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Basket() {
    return (
    <>
        <Image source={topo} style={styles.top} />
        <Text style={styles.title}>Basket Detail</Text>
    </>
    ) 
}

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    }
});