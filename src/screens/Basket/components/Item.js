import React from 'react';
import Texto  from '../../../components/Texto';
import { Image, View, StyleSheet} from 'react-native';

export default function Item ({item: {name, image}}) {
    return <View key={name} style={styles.item}>
        <Image source={image} style={styles.image}/>
        <Texto style={styles.text} >{name}</Texto>
    </View>  

}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal:16,
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