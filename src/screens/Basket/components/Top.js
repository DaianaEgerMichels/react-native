import React from "react";
import Texto from "../../../components/Texto";
import topo from "../../../../assets/topo.png";
import { StyleSheet, Dimensions, Image} from "react-native";

const width = Dimensions.get('screen').width;

export default function Top() {
 return(
    <>
    <Image source={topo} style={styles.top} />
    <Texto style={styles.title}>Basket Detail</Texto>
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