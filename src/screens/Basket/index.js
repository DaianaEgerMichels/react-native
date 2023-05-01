import React from "react";
import { StyleSheet, View } from "react-native";

import Top from "./components/Top";
import Details from "./components/Details";


export default function Basket({top, details}) {
    return (
    <>
        <Top {...top}/>
        <View style={styles.basket}>
            <Details {...details}/>
        </View>
    </>
    ) 
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }  
});