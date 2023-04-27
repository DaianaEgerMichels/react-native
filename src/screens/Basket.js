import React from "react";
import { StyleSheet, Image, Dimensions, View } from "react-native";

import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";
import Texto from "../components/Texto";

const width = Dimensions.get('screen').width;

export default function Basket() {
    return (
    <>
        <Image source={topo} style={styles.top} />
        <Texto style={styles.title}>Basket Detail</Texto>

        <View style={styles.basket}>
            <Texto style={styles.name} >Basket of Vegetables</Texto>
            <View style={styles.farm}>
                <Image source={logo} style={styles.imageFarm} />
                <Texto style={styles.nameFarm} >Little Farm</Texto>
            </View>
            
            <Texto style={styles.description} >
                A basket with products carefully 
                selected from the farm straight to your kitchen
            </Texto>
            <Texto style={styles.price} >R$40,00</Texto>
        </View>
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
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    name: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    farm: {
        flexDirection: "row",
        paddingVertical: 12
    },
    nameFarm: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    imageFarm: {
        width: 32,
        height: 32
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});