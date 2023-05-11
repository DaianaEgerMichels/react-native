import React from 'react';
import Texto  from '../../../components/Texto';
import { Image, View, StyleSheet } from 'react-native';

export default function Items ({title, list}) {
    return (
        <>
        <Texto style={styles.title}>{title}</Texto>
        {list.map(({name, image}) => {
            return  <View key={name} style={styles.item}>
                        <Image source={image} style={styles.image}/>
                        <Texto style={styles.text} >{name}</Texto>
                    </View> 
        })}
        </> 
    )

}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center"
    },
    image: {
        width: 46,
        height: 46
    },
    text: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})