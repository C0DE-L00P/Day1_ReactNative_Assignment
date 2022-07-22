import React from 'react'

import {
    Text,
    View,
  } from "react-native";

const InfoBox = (props) => {
    return (
        <View style={{display: 'flex',justifyContent: 'space-between',flexDirection: 'row',alignItems: 'center',paddingEnd: 32,paddingStart: 32, width: '100%',marginTop: 8}}>
          <Text style={{backgroundColor: '#e1ac15',padding: 8,fontWeight: 'bold'}}>{props.title}</Text>
          <Text style={{color: props.color??'#a5a7a8'}}>{props.value}</Text> 
        </View>
    )
}

export default InfoBox;