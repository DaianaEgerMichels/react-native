import React from 'react';
import { StyleSheet, Image, View } from "react-native";

import Texto from "../../../components/Texto";

export default function Details({name, nameFarm, imageFarm, description, price}) {
    return (
        <>
        <Texto style={styles.name} >{name}</Texto>
            <View style={styles.farm}>
                <Image source={imageFarm} style={styles.imageFarm} />
                <Texto style={styles.nameFarm} >{nameFarm}</Texto>
            </View>
            
            <Texto style={styles.description} >
                {description}
            </Texto>
            <Texto style={styles.price} >{price}</Texto>
        </>
    )
}

const styles = StyleSheet.create({
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