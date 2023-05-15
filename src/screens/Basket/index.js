import React from "react";
import {FlatList, StyleSheet, View } from "react-native";

import Top from "./components/Top";
import Details from "./components/Details";
import Item from "./components/Item";
import Texto from "../../components/Texto";


export default function Basket({top, details, items}) {
    return (
    <>
        <FlatList
            data={items.list}
            renderItem={Item}
            keyExtractor={({name}) => name}
            ListHeaderComponent={() => {
                return <>
                    <Top {...top}/>
                    <View style={styles.basket}>
                        <Details {...details}/>
                        <Texto style={styles.title}>{items.title}</Texto>
                    </View>
                </>
            }}
        />
        
    </>
    ) 
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    title: {
        color: "#464646",
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8
    }, 
});