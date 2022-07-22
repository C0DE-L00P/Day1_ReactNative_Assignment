import React from "react";
import {View, Text } from 'react-native'
import ProgressBar from "@ramonak/react-progress-bar";

const SliderElement = (props) => {
  return (
    <View style={{marginBottom: 16}}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}> {props.title}</Text>
        <Text style={{ color: "white", fontSize: 16 }}> {props.percent}%</Text>
      </View>

      <ProgressBar
        completed={props.percent}
        bgColor={"#efb615"}
        baseBgColor={"#222030"}
        isLabelVisible={false}
      />
    </View>
  );
};

export default SliderElement;