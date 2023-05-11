import React from 'react';
import Texto  from '../../../components/Texto';
import { Image, View } from 'react-native';

export default function Items ({title, list}) {
    return (
        <>
        <Texto>{title}</Texto>
        {list.map(({name, image}) => {
            return  <View key={name}>
                        <Texto >{name}</Texto>
                        <Image source={image}/>
                    </View> 
        })}
        </> 
    )

}